import { useQuery } from "@tanstack/react-query";
import { type durationType, queryUserRanking } from "../apis/ranking";

export function useQueryUserRanking({ duration }: { duration: durationType }) {
  return useQuery({
    queryKey: ["userRanking", duration],
    queryFn: () => queryUserRanking(duration),
  });
}
