import type { ReactElement } from "react";
import styled from "@emotion/styled";

interface HeaderProps {
  leftElement?: ReactElement | string;
  centerElement: ReactElement | string;
  rightElement?: ReactElement | string;
}

function Header({ leftElement, centerElement, rightElement }: HeaderProps) {
  return (
    <HeaderWrapper aria-label="페이지 헤더">
      <LeftElement>{leftElement}</LeftElement>
      <CenterElement as={typeof centerElement === "string" ? "h1" : "div"}>
        {centerElement}
      </CenterElement>
      <RightElement>{rightElement}</RightElement>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header({
  position: "sticky",
  zIndex: 999,
  top: 0,

  display: "flex",
  alignItems: "center",

  width: "100%",
  height: "4.8rem",

  backgroundColor: "white",
});

const LeftElement = styled.div({
  position: "absolute",
  left: "1.5rem",
});

const CenterElement = styled.div({
  margin: "0 auto",
});

const RightElement = styled.div({
  position: "absolute",
  right: "1.5rem",
});
