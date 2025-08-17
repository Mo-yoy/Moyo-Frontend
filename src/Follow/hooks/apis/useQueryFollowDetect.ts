import { type FollowDetectType, queryFollowDetect } from "@/Follow/apis/follow";
import { followQueryKeys } from "@/Follow/hooks/apis/queryKeys";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useQueryFollowDetect(detectType: FollowDetectType) {
  return useSuspenseQuery({
    queryKey: followQueryKeys.list(detectType),
    queryFn: () => queryFollowDetect(detectType),
  });
}
