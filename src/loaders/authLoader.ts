import { reissue } from "@/common/api/reissue";
import { accessTokenStore } from "@/common/stores/accessTokenStore";

export async function authLoader() {
  try {
    const { data } = await reissue();
    accessTokenStore.set(data.accessToken);
    return null;
  } catch (e) {
    window.location.href = "/login";
    throw e;
  }
}
