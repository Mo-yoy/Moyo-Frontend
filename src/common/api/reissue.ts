import type { ApiResponse } from "@/common/types/api";
import { apiClient } from ".";

interface ReissueBody {
  accessToken: string;
}

export async function reissue() {
  return apiClient
    .post<ApiResponse<ReissueBody>>("/auth/reissue/token", {
      credentials: "include",
    })
    .json();
}
