import { Global, css } from "@emotion/react";
import type { ReactElement } from "react";
import { reset } from "./reset";

const globalCss = css`
  /* font-face 추가 필요 */
  ${reset}
`;
export function GlobalStyles(): ReactElement {
  return <Global styles={[globalCss]} />;
}
