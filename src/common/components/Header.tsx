import type { ReactElement } from "react";
import styled from "@emotion/styled";
import { Z_INDEX } from "../constants/zIndex";

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
  zIndex: Z_INDEX.HEADER,
  top: 0,

  display: "flex",

  width: "100%",
  height: "4.8rem",

  backgroundColor: "white",
});

const LeftElement = styled.div({
  display: "flex",
  alignItems: "center",

  position: "absolute",
  left: "1.5rem",

  height: "100%",
});

const CenterElement = styled.div({
  display: "flex",
  alignItems: "center",

  margin: "0 auto",
  height: "100%",
});

const RightElement = styled.div({
  display: "flex",
  alignItems: "center",

  position: "absolute",
  right: "1.5rem",

  height: "100%",
});
