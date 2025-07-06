import styled from "@emotion/styled";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import type { ReactElement } from "react";
import { useNavigate } from "react-router";
import { Z_INDEX } from "../constants/zIndex";
import { rem } from "../utils/rem";

interface HeaderProps {
  backButton?: {
    renderIcon?: () => ReactElement;
    onClick?: () => void;
  };
  title?: string;
  renderLeft?: () => ReactElement;
  renderCenter?: () => ReactElement;
  renderRight?: () => ReactElement;
}

function Header({ backButton, title, renderLeft, renderCenter, renderRight }: HeaderProps) {
  const navigate = useNavigate();

  const renderBackButton = () => {
    const onClickBackButton = () => {
      if (backButton && "onClick" in backButton && backButton.onClick) {
        backButton.onClick();
        return;
      }
      // default behavior
      navigate(-1);
    };

    return (
      <button type="button" onClick={onClickBackButton}>
        {(() => {
          if (backButton && "renderIcon" in backButton && backButton.renderIcon) {
            return backButton.renderIcon();
          }
          // default back button icon
          return <ChevronLeftIcon width={28} height={28} />;
        })()}
      </button>
    );
  };

  const renderCentnerElement = () => renderCenter && <CenterElement as="div">{renderCenter()}</CenterElement>;

  const renderTitleElement = () =>
    title && (
      <CenterElement as="h1" css={{ fontSize: rem(1.8), fontWeight: "700" }}>
        {title}
      </CenterElement>
    );

  return (
    <HeaderWrapper aria-label="페이지 헤더">
      <LeftElement>{renderLeft?.() ?? renderBackButton()}</LeftElement>
      {renderCentnerElement() || renderTitleElement()}
      <RightElement>{renderRight?.()}</RightElement>
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
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
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
