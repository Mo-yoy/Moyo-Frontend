import { apiClient } from "@/common/api";

export type durationType = "week" | "month" | "year";

interface RankingUser {
  userid: number;
  profileImageUrl: string;
  username: string;
  rankPoint: number;
}

interface RankingUserResponse {
  rankingList: RankingUser[];
  lastPage: boolean;
}

export async function queryUserRanking(duration: durationType) {
  return apiClient.get<RankingUserResponse>(`api/v1/rankings?period=${duration}`);
}
