export const userQueryKeys = {
  all: () => ["user"],
  myProfile: () => [...userQueryKeys.all(), "myProfile"],
};
