import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { Outlet } from "react-router";

export default function GlobalLayout() {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div({
  maxWidth: rem(80),
});
