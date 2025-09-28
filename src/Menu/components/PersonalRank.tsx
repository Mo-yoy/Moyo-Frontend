import UserListItemCard from "@/common/components/UserListItemCard";
import UserProfileAvatar from "@/common/components/UserProfileAvatar";
import { colors } from "@/common/styles/theme";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { Flex, Text } from "@radix-ui/themes";

export function PersonalRank() {
  return (
    <Container direction="column" gap="4">
      <Flex justify="between">
        <Text size="5" weight="bold">
          👑 개인 랭킹
        </Text>
        <button type="button">랭킹 더보기</button>
      </Flex>
      <Flex direction="column" gap="2">
        {[1, 2, 3, 4, 5].map((num) => (
          <UserListItemCard key={num}>
            <Flex justify="between" align="center" css={{ padding: 2 }}>
              <Flex gap="4" align="center">
                <Text size="4" weight="medium">
                  {num}
                </Text>
                <UserProfileAvatar />

                <Text size="2" weight="medium">
                  name{" "}
                </Text>
              </Flex>
              <Flex gap="3">pt</Flex>
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
