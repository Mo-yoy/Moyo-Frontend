import ky from "ky";

export const apiClient = ky.create({
  prefixUrl: import.meta.env.BASE_URL,
});
