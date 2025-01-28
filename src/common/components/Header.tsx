import { Flex } from "@radix-ui/themes";
import type { ReactNode } from "react";
import styled from "@emotion/styled";

interface HeaderProps {
  leftElement?: ReactNode;
  centerElement: ReactNode;
  rightElement?: ReactNode;
}

function Header({ leftElement, centerElement, rightElement }: HeaderProps) {
  return (
    <HeaderWrapper aria-label="페이지 헤더">
      <Flex height="100%" align="center">
        <LeftElement>{leftElement}</LeftElement>
        <CenterElement>{centerElement}</CenterElement>
        <RightElement>{rightElement}</RightElement>
      </Flex>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header({
  position: "sticky",
  zIndex: 999,
  top: 0,

  width: "100%",
  height: "4.8rem",

  backgroundColor: "white",
});

const LeftElement = styled.div`
  position: absolute;
  left: 1.5rem;
`;

const CenterElement = styled.div`
  margin: 0 auto;
`;

const RightElement = styled.div`
  position: absolute;
  right: 1.5rem;
`;
