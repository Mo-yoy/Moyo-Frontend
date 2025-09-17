import Header from "@/common/components/Header";
import styled from "@emotion/styled";

export function RankingPage() {
  return (
    <>
      <Header title="랭킹" />
      <PageBody>
        <PodiumContainer>rrr</PodiumContainer>
      </PageBody>
    </>
  );
}

const PageBody = styled.div`
  width: 100%;
  height: 100dvh;
`;

const PodiumContainer = styled.div({
  width: "100%",
  height: "calc(100dvh * 0.3)",

  background: "linear-gradient(to bottom, #8745c7 0%, #520189 40%, #000000 100%)",
});
