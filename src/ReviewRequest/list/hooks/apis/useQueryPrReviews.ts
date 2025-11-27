import type { ApiResponse } from "@/common/types/api";
import { useQuery } from "@tanstack/react-query";
import {
  type QueryPrReviewsQueryParams,
  type QueryPrReviewsResponse,
  queryPrReviews,
} from "../../apis/query-pr-reviews";
import { prListQueryKeys } from "./querykeys";

export const useQueryPrReviews = (params?: QueryPrReviewsQueryParams) => {
  return useQuery<ApiResponse<QueryPrReviewsResponse>, Error>({
    queryFn: () => queryPrReviews(params),
    queryKey: prListQueryKeys.prReviews(params),
  });
};
