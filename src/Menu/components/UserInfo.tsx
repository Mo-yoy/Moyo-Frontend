import { useQueryMyProfile } from "@/Menu/hooks/apis/useQueryMyProfile";
import UserProfileAvatar from "@/common/components/UserProfileAvatar";
import { colors } from "@/common/styles/theme";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { Flex, Text } from "@radix-ui/themes";

export function UserInfo() {
  const {
    data: { data: myProfile },
  } = useQueryMyProfile();

  return (
    <Container justify="between" align="center" gap="4">
      <UserProfileAvatar css={{ width: rem(8), height: rem(8) }} src={myProfile.profileImgUrl} />
      <Flex direction="column" gap="1" css={{ marginRight: "auto" }}>
        <Text size="6" weight="bold">
          {myProfile.username}
        </Text>
        <Text size="3" weight="medium">
          {myProfile.rankPoint.toLocaleString()}pt
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="center"
        css={{ width: rem(6), height: rem(6), borderRadius: "50%", border: `2px solid ${colors.gray4}` }}
      >
        <Text size="8" weight="bold" css={{}}>
          {myProfile.rankGrade}
        </Text>
      </Flex>
    </Container>
  );
}

const Container = styled(Flex)({
  width: "100%",
  padding: rem(2),

  backgroundColor: colors.gray2,
  border: `6px double ${colors.main5}`,
  borderRadius: rem(1),
});
