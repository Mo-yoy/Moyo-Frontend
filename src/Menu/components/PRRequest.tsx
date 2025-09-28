import UserListItemCard from "@/common/components/UserListItemCard";
import UserProfileAvatar from "@/common/components/UserProfileAvatar";
import { colors } from "@/common/styles/theme";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { Flex, Text } from "@radix-ui/themes";

export function PRRequest() {
  return (
    <Container direction="column" gap="4">
      <Flex justify="between">
        <Text size="5" weight="bold">
          🔃 PR 리뷰 요청
        </Text>
        <button type="button">요청 더보기</button>
      </Flex>
      <Flex direction="column" gap="2">
        {[1, 2, 3, 4, 5].map((num) => (
          <UserListItemCard key={num}>
            <Flex justify="between" align="center" gap="1" css={{ padding: 2 }}>
              <Flex direction="column" gap="2">
                <Flex gap="2">
                  <Tag size="2">백엔드</Tag>
                  <Tag size="2">SOPT</Tag>
                  <Tag size="2">Moyoy</Tag>
                </Flex>
                <Text size="4" weight="bold" css={{ wordBreak: "keep-all" }}>
                  메인페이지 기능 구현에 앞서 퍼블 리싱을 먼저 합니다
                </Text>

                <Text size="2" weight="medium" css={{ color: colors.gray10 }}>
                  2025-02-02
                </Text>
              </Flex>
              <UserProfileAvatar />
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

const Tag = styled(Text)({
  backgroundColor: colors.main4,
  padding: `${rem(0.3)} ${rem(0.5)}`,
  borderRadius: rem(0.5),
});
