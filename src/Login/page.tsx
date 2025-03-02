import { IconGithubLogo } from "@/assets/icons";
import Spacer from "@/common/components/Spacer";
import { colors } from "@/common/styles/theme";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { indigo, slate } from "@radix-ui/colors";

export function LoginPage() {
  return (
    <Container>
      <Video autoPlay muted loop>
        <source src="src/assets/videos/login_background.mp4" type="video/mp4" />
      </Video>

      <TextContainer>
        <DimmedBackground>
          <Title>
            랭킹으로 경쟁하며,
            <br />
            함께 만들어가는 프로젝트
          </Title>
          <Spacer height={1} />
          <Description>PR 리뷰 요청과 맞팔 관리도 한 곳에서 </Description>
          <Spacer height={3} />
          <LoginButton>
            {/* <IconGithubLogo /> */}
            Github로 시작하기
          </LoginButton>
        </DimmedBackground>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div({
  height: "100vh",
  position: "relative",
});

const Video = styled.video({
  width: "100%",
  height: "100vh",
  objectFit: "cover",
});

const TextContainer = styled.div({
  width: "100%",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",

  position: "absolute",
  top: 0,

  background: "rgba(0, 0, 0, 0.2)",
});

const Title = styled.h1({
  color: colors.gray1,
  fontWeight: 700,
  fontSize: rem(3.2),
  textAlign: "center",
});

const Description = styled.p({
  color: colors.gray1,
  fontWeight: 700,
  fontSize: rem(1.8),
  textAlign: "center",
});

const LoginButton = styled.button({
  backgroundColor: indigo.indigo1,
  color: slate.slate12,
  fontWeight: 700,
  fontSize: rem(1.8),

  width: "75%",
  padding: `${rem(1.6)} 0`,
  borderRadius: rem(5),
});

const DimmedBackground = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100%",

  background:
    "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0.89875) 35.5%, rgba(0, 0, 0, 0.7) 54.5%, rgba(0, 0, 0, 0.5) 77.5%, rgba(0, 0, 0, 0.2) 85%, rgba(0, 0, 0, 0) 100%)",

  paddingTop: rem(8),
  paddingBottom: "18vh",
  "@media screen and (min-width:500px)": {
    paddingBottom: "10vh",
  },
});
