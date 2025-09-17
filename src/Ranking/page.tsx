import ImgPodium from "@/assets/images/test.jpg";
import Header from "@/common/components/Header";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { PodiumItem } from "./components/PodiumItem";

export function RankingPage() {
  return (
    <>
      <Header title="랭킹" />
      <PageBody>
        <PodiumContainer>
          <PodiumItemWrapper>
            <PodiumItem rank={2} nickname="spongebob" point={1000} profileImage={ImgPodium} />
            <PodiumItem rank={1} nickname="spongebob" point={1000} profileImage={ImgPodium} />
            <PodiumItem rank={3} nickname="spongebob" point={1000} profileImage={ImgPodium} />
          </PodiumItemWrapper>
        </PodiumContainer>
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
  height: rem(26),

  background: "linear-gradient(to bottom, #8745c7 0%, #520189 40%, #000000 100%)",
});

const PodiumItemWrapper = styled.div({
  width: "100%",

  paddingTop: rem(2.6),

  display: "flex",
  justifyContent: "center",
  gap: rem(3),
});
