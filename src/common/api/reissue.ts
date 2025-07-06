import { apiClient } from ".";

interface ReissueBody {
  accessToken: string;
}

export async function reissue() {
  return apiClient.post<ReissueBody>("/auth/reissue/token", {
    credentials: "include",
  });
}
