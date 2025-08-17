import type { FollowDetectResponse, FollowDetectType } from "@/Follow/apis/follow";
import { useCreateFollowUser } from "@/Follow/hooks/apis/useCreateFollowUser";
import { useDeleteUnfollowUser } from "@/Follow/hooks/apis/useDeleteUnfollowUser";
import UserListItemCard from "@/common/components/UserListItemCard";
import UserProfileAvatar from "@/common/components/UserProfileAvatar";
import { Button, Flex } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

interface FollowListProps {
  type: FollowDetectType;
  userList: FollowDetectResponse["userList"];
}

export function FollowList({ type, userList }: FollowListProps) {
  const { mutateAsync: unfollow } = useDeleteUnfollowUser();
  const { mutateAsync: follow } = useCreateFollowUser();

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
              {type === "followed-only" ? (
                <Button
                  color="indigo"
                  variant="soft"
                  size="1"
                  onClick={async () => {
                    try {
                      follow(user.githubUserId);
                    } catch (e) {
                      alert("팔로우에 실패했습니다. 다시 시도해주세요");
                    }
                  }}
                >
                  Follow
                </Button>
              ) : (
                <Button
                  color="indigo"
                  variant="soft"
                  size="1"
                  onClick={async () => {
                    try {
                      unfollow(user.githubUserId);
                    } catch (e) {
                      alert("언팔로우에 실패했습니다. 다시 시도해주세요");
                    }
                  }}
                >
                  Unfollow
                </Button>
              )}
            </Flex>
          </Flex>
        </UserListItemCard>
      ))}
    </Flex>
  );
}
