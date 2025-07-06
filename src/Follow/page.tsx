import type { FollowDetectType } from "@/Follow/apis/follow";
import { FollowList } from "@/Follow/components/FollowList";
import { FollowStats } from "@/Follow/components/FollowStats";
import { Tab } from "@/Follow/components/Tab";
import Header from "@/common/components/Header";
import Spacer from "@/common/components/Spacer";
import { colors } from "@/common/styles/theme";
import styled from "@emotion/styled";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

export function FollowPage() {
  const [selectedTab, setSelectedTab] = useState<FollowDetectType>("mutual");

  return (
    <>
      <Header center="팔로우 관리" right={<Button>새로고침</Button>} />

      <Container>
        <Flex direction="column" align="center" gap="4">
          <Flex direction="column" align="center" css={{ width: "100%" }}>
            <Text size="1" weight="medium" color="gray" css={{ padding: "1.5rem 0" }}>
              마지막 업데이트: 10분 전
            </Text>
            <FollowStats />
            <Spacer height={2} />
            <Tab onChange={setSelectedTab} />
          </Flex>
        </Flex>
        <Spacer height={2} />

        <FollowList type={selectedTab} />
      </Container>
    </>
  );
}

const Container = styled.div({
  overflowY: "auto",
  height: "100vh",
  backgroundColor: colors.gray2,
});
