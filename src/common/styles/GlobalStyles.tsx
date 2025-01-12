import { reset } from "@/common/styles/reset";
import { Global, css } from "@emotion/react";
import type { ReactElement } from "react";

const globalCss = css`
  ${reset}

  @font-face {
    font-family: "Pretendard";
    font-weight: 100 900;
    font-display: swap;
    src: url("/fonts/PretendardVariable.woff2") format("woff2-variations");
  }

  .radix-themes {
    --default-font-family: "Pretendard";
  }
`;

export function GlobalStyles(): ReactElement {
  return <Global styles={[globalCss]} />;
}
