import UserListItemCard from "@/common/components/UserListItemCard";
import { Button, Flex } from "@radix-ui/themes";
import UserProfileAvatar from "@/common/components/UserProfileAvatar";
import { Text } from "@radix-ui/themes";
import type { FollowTab } from "@/Follow/page";

interface FollowListProps {
  type: FollowTab;
}

export function FollowList({ type }: FollowListProps) {
  const users = Array.from({ length: 20 });

  return (
    <Flex direction="column" gap="2" css={{ padding: "0 2rem" }}>
      {users.map((_, idx) => (
        <UserListItemCard key={idx}>
          <Flex justify="between">
            <Flex gap="4" align="center">
              <UserProfileAvatar />

              <Text size="5" weight="medium">
                이름
              </Text>
            </Flex>
            <Flex gap="3">
              <Button color="indigo" variant="soft">
                Unfollow
              </Button>
            </Flex>
          </Flex>
        </UserListItemCard>
      ))}
    </Flex>
  );
}
