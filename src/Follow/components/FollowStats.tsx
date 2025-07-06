import { colors } from "@/common/styles/theme";
import { Flex, Text } from "@radix-ui/themes";

const STATS = [
  {
    type: "mutual",
    title: "맞팔로우",
    count: 25,
  },
  {
    type: "follow-only",
    title: "팔로워",
    count: 3,
  },
  {
    type: "followed-only",
    title: "팔로잉",
    count: 3,
  },
];

export function FollowStats() {
  return (
    <Flex gap="2" css={{ width: "80%" }}>
      {STATS.map((item) => (
        <Flex
          key={item.title}
          direction="column"
          align="center"
          justify="center"
          css={{
            flex: 1,
            backgroundColor: "white",
            padding: "1rem",
            border: `1px solid ${colors.gray6}`,
            borderRadius: "5px",
          }}
        >
          <Text size="2" weight="medium" color="gray">
            {item.title}
          </Text>
          <Text size="5" weight="bold">
            {item.count}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
