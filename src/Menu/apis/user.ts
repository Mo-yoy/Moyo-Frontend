import { apiClient } from "@/common/api";

export interface MyProfileResponse {
  userId: number;
  username: string;
  profileImgUrl: string;
  rankPoint: number;
  rankGrade: string;
}

export async function queryMyProfile() {
  return apiClient.get<MyProfileResponse>("api/v1/users/me/profile");
}
