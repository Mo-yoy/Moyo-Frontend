import ImgPodium from "@/assets/images/test.jpg";
import Header from "@/common/components/Header";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { useState } from "react";
import { PodiumItem } from "./components/PodiumItem";

export function RankingPage() {
  const [selectedOption, setSelectedOption] = useState<"weekly" | "monthly" | "yearly">("weekly");

  return (
    <>
      <Header title="랭킹" />
      <PageBody>
        <PodiumContainer>
          <RankingOptionButtonGroup>
            <RankingOptionButton isSelected={selectedOption === "weekly"} onClick={() => setSelectedOption("weekly")}>
              주간
            </RankingOptionButton>
            <div
              style={{
                width: rem(0.1),
                height: rem(2),
                margin: `0 ${rem(0.3)}`,
                backgroundColor: "#A1A1A1",
              }}
            />
            <RankingOptionButton isSelected={selectedOption === "monthly"} onClick={() => setSelectedOption("monthly")}>
              월간
            </RankingOptionButton>
            <div
              style={{
                width: rem(0.1),
                height: rem(2),
                margin: `0 ${rem(0.3)}`,
                backgroundColor: "#A1A1A1",
              }}
            />
            <RankingOptionButton isSelected={selectedOption === "yearly"} onClick={() => setSelectedOption("yearly")}>
              연간
            </RankingOptionButton>
          </RankingOptionButtonGroup>
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

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

const RankingOptionButtonGroup = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: rem(22),
  height: rem(2.7),
  padding: `0 ${rem(0.3)}`,
  marginTop: rem(1.2),

  borderRadius: rem(3),
  backgroundColor: "rgba(75, 75, 75, 0.85)",
});

const RankingOptionButton = styled.button<{ isSelected: boolean }>(({ isSelected }) => ({
  flex: 1,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: rem(2.1),

  borderRadius: rem(3),

  fontSize: rem(1),
  fontWeight: 700,
  color: "#ffffff",

  backgroundColor: isSelected ? "#A1A1A1" : "transparent",
}));
