import { type FollowDetectResponse, type FollowDetectType, queryFollowDetect } from "@/Follow/apis/follow";
import { followQueryKeys } from "@/Follow/hooks/apis/queryKeys";
import type { ApiResponse } from "@/common/types/api";
import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export function useQueryFollowDetect(detectType: FollowDetectType) {
  return useInfiniteQuery<
    ApiResponse<FollowDetectResponse>,
    Error,
    InfiniteData<ApiResponse<FollowDetectResponse>>,
    string[],
    number | undefined
  >({
    queryKey: followQueryKeys.list(detectType),
    queryFn: ({ pageParam }) => queryFollowDetect(detectType, pageParam),
    initialPageParam: undefined,
    getNextPageParam: (prevPage) => {
      const lastPage = prevPage.data.lastPage;
      if (lastPage) return undefined;

      const userList = prevPage.data.userList;
      return userList[userList.length - 1].githubUserId;
    },
    staleTime: 60000,
  });
}
