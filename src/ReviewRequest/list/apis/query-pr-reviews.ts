import { apiClient } from "@/common/api";
import type { ApiResponse } from "@/common/types/api";

export interface QueryPrReviewsQueryParams {
  /** PR 현재 상태 : 보내지 않을시 모든 상태 조회 */
  status?: "open" | "closed";
  /** 정렬 순서 */
  order?: "createdAt-desc" | "createdAt-asc" | "hitCount-desc" | "hitCount-asc";
  /** 직군별 필터링 */
  position?: "BACKEND" | "FRONTEND";
  /** 마지막으로 조회된 요청글 id  */
  lastReviewId?: number;
  /** 페이지 사이즈 (기본 20)  */
  size?: number;
}

/**
 * PR 리뷰 요청글 리스트 아이템
 * @
 */
export interface PrReviewListItem {
  /** 작성자 프로필 사진 URL */
  profileImageUrl: string;
  /** 작성자 유저 태그 */
  username: string;
  /** 요청글 상태 */
  status: string;
  /** 분야 태그 */
  position: string;
  /** PR 리뷰 요청글 제목 */
  title: string;
  /** 조회수 */
  hitCount: number;
  /** 작성일자/시각 */
  createdAt: string;
}

export interface QueryPrReviewsResponse {
  /** PR 리뷰 요청글 리스트 */
  prReviews: PrReviewListItem[];
  /** 마지막 페이지 여부 */
  isLast: boolean;
}

export async function queryPrReviews(params?: QueryPrReviewsQueryParams): Promise<ApiResponse<QueryPrReviewsResponse>> {
  return apiClient.get<QueryPrReviewsResponse>("api/v1/pr-reviews", {
    searchParams: params as Record<string, string | number>,
  });
}
