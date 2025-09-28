import { queryMyProfile } from "@/Menu/apis/user";
import { userQueryKeys } from "@/Menu/hooks/apis/queryKeys";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useQueryMyProfile() {
  return useSuspenseQuery({
    queryKey: userQueryKeys.myProfile(),
    queryFn: queryMyProfile,
  });
}
