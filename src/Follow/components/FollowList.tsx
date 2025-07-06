import type { FollowDetectType } from "@/Follow/apis/follow";
import UserListItemCard from "@/common/components/UserListItemCard";
import UserProfileAvatar from "@/common/components/UserProfileAvatar";
import { Button, Flex } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

interface FollowListProps {
  type: FollowDetectType;
}

export function FollowList({ type }: FollowListProps) {
  // TODO: 실제 user data로 변경
  const users = Array.from({ length: 20 });

  return (
    <Flex direction="column" gap="2" css={{ padding: "0 2rem" }}>
      {users.map((_, idx) => (
        // TODO: key user id로 변경
        <UserListItemCard key={`${idx}-${type}`}>
          <Flex justify="between" align="center">
            <Flex gap="4" align="center">
              <UserProfileAvatar />

              <Text size="2" weight="medium">
                seobbang
              </Text>
            </Flex>
            <Flex gap="3">
              <Button color="indigo" variant="soft" size="1">
                Unfollow
              </Button>
            </Flex>
          </Flex>
        </UserListItemCard>
      ))}
    </Flex>
  );
}
