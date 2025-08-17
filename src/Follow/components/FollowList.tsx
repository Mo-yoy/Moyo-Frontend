import type { FollowDetectResponse } from "@/Follow/apis/follow";
import UserListItemCard from "@/common/components/UserListItemCard";
import UserProfileAvatar from "@/common/components/UserProfileAvatar";
import { Button, Flex } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

interface FollowListProps {
  userList: FollowDetectResponse["userList"];
}

export function FollowList({ userList }: FollowListProps) {
  return (
    <Flex direction="column" gap="2" css={{ padding: "0 2rem" }}>
      {userList.map((user) => (
        <UserListItemCard key={user.githubUserId}>
          <Flex justify="between" align="center">
            <Flex gap="4" align="center">
              <UserProfileAvatar src={user.profileImgUrl} />

              <Text size="2" weight="medium">
                {user.username}
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
