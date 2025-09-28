import { useQueryUserRanking } from "@/Ranking/hooks/useQueryUserRanking";
import UserListItemCard from "@/common/components/UserListItemCard";
import UserProfileAvatar from "@/common/components/UserProfileAvatar";
import { colors } from "@/common/styles/theme";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { Flex, Text } from "@radix-ui/themes";

export function PersonalRank() {
  const { data: userRanking } = useQueryUserRanking({ duration: "week" });
  const allRankingList = userRanking?.pages.flatMap((page) => page.data.rankingList) ?? [];

  const topFive = allRankingList.slice(0, 5);

  return (
    <Container direction="column" gap="4">
      <Flex justify="between">
        <Text size="5" weight="bold">
          👑 개인 주간 랭킹
        </Text>
        <button type="button">랭킹 더보기</button>
      </Flex>
      <Flex direction="column" gap="2">
        {topFive.map(({ userid, profileImageUrl, username, rankPoint }, idx) => (
          <UserListItemCard key={userid}>
            <Flex justify="between" align="center" css={{ padding: 2 }}>
              <Flex gap="4" align="center">
                <Text size="4" weight="medium">
                  {idx + 1}
                </Text>
                <UserProfileAvatar src={profileImageUrl} />

                <Text size="2" weight="medium">
                  {username}
                </Text>
              </Flex>
              <Flex gap="3">{rankPoint}pt</Flex>
            </Flex>
          </UserListItemCard>
        ))}
      </Flex>
    </Container>
  );
}

const Container = styled(Flex)({
  width: "100%",
  padding: rem(2),

  backgroundColor: colors.gray4,
  border: `1px solid ${colors.gray4}`,
  borderRadius: rem(1),
});
