import ky from "ky";

export const api = ky.create({
  prefixUrl: "https://api.example.com",
  hooks: {
    afterResponse: [
      (response) => {
        response.json();
      },
    ],
  },
});
