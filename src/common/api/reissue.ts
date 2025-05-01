import { apiClient } from "@/common/api";
import type { ApiResponse } from "@/common/types/api";

interface ReissueBody {
  accessToken: string;
}

export async function reissue() {
  return apiClient.post<ApiResponse<ReissueBody>>("auth/reissue/token").json();
}
