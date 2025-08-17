import type { FollowDetectType } from "@/Follow/apis/follow";
import { DetectTypeSelector } from "@/Follow/components/DetectTypeSelector";
import { FollowList } from "@/Follow/components/FollowList";
import { useQueryFollowDetect } from "@/Follow/hooks/apis/useQueryFollowDetect";
import Header from "@/common/components/Header";
import Spacer from "@/common/components/Spacer";
import { colors } from "@/common/styles/theme";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

export function FollowPage() {
  const [selectedType, setSelectedType] = useState<FollowDetectType>("mutual");
  const {
    data: {
      data: { userList, totalUserCount, lastSyncAt },
    },
  } = useQueryFollowDetect(selectedType);

  return (
    <>
      <Header
        center="팔로우 관리"
        right={
          <Button>
            새로고침
            <Text size="1" weight="medium" color="gray" css={{ padding: "1rem 0", marginLeft: "auto" }}>
              {lastSyncAt}
            </Text>
          </Button>
        }
      />

      <Container>
        <Flex direction="column" align="center" gap="4">
          <Flex direction="column" align="center" css={{ width: "100%" }}>
            <Spacer height={2} />
            <DetectTypeSelector onChange={setSelectedType} />
            <Spacer height={2} />
            <Flex align="center" gap="1" css={{ margin: `0 auto 0 ${rem(2)}` }}>
              <Text size="2" weight="bold">
                {selectedType === "mutual" && "맞팔로우"}
                {selectedType === "follow-only" && "나만 팔로우"}
                {selectedType === "followed-only" && "상대만 팔로우"}
              </Text>
              <Text
                size="1"
                weight="bold"
                css={{
                  backgroundColor: colors.gray4,
                  color: colors.gray11,
                  borderRadius: "50%",
                  padding: rem(0.2),
                }}
              >
                {totalUserCount}
              </Text>
            </Flex>
            <Spacer height={2} />
          </Flex>
        </Flex>
        <FollowList userList={userList} />
      </Container>
    </>
  );
}

const Container = styled.div({
  overflowY: "auto",
  height: "100vh",
  backgroundColor: colors.gray2,
});
