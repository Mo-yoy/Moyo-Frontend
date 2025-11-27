import type { QueryPrReviewsQueryParams } from "../../apis/query-pr-reviews";

export const prListQueryKeys = {
  all: () => ["pr-list"],
  prReviews: (params?: QueryPrReviewsQueryParams) => [...prListQueryKeys.all(), "pr-reviews", params],
};
