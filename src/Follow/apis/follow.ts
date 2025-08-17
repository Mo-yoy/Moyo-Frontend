import { apiClient } from "@/common/api";
import type { ApiResponse } from "@/common/types/api";

export type FollowDetectType = "mutual" | "follow-only" | "followed-only";

export interface FollowDetectUser {
  githubUserId: number;
  username: string;
  profileImgUrl: string;
}

export interface FollowDetectResponse {
  userList: FollowDetectUser[];
  lastPage: boolean;
  totalUserCount: number;
  lastSyncAt: string;
}

export async function queryFollowDetect(detectType: FollowDetectType) {
  return apiClient.get<ApiResponse<FollowDetectResponse>>(`api/v1/users/me/followings/${detectType}`).json();
}
