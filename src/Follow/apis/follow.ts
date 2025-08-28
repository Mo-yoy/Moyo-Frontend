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

export async function queryFollowDetect({
  detectType,
  lastGithubUserId,
}: { detectType: FollowDetectType; lastGithubUserId?: number }) {
  const poll = async (): Promise<ApiResponse<FollowDetectResponse>> => {
    const response = await apiClient.get(`api/v1/users/me/followings/${detectType}`, {
      searchParams: lastGithubUserId ? { lastGithubUserId } : undefined,
    });

    if (response.status === 202) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return poll();
    }

    return response.json();
  };

  return poll();
}

export async function createFollowUser(githubUserId: FollowDetectUser["githubUserId"]) {
  return apiClient.post<ApiResponse<FollowDetectResponse>>(`api/v1/follow/${githubUserId}`).json();
}

export async function deleteUnfollowUser(githubUserId: FollowDetectUser["githubUserId"]) {
  return apiClient.delete<ApiResponse<FollowDetectResponse>>(`api/v1/unfollow/${githubUserId}`).json();
}
