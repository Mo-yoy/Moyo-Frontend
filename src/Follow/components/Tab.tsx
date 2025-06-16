import { colors } from "@/common/styles/theme";
import { SegmentedControl } from "@radix-ui/themes";
import type { FollowTab } from "../page";

interface TabProps {
  onChange: (value: FollowTab) => void;
}

export function Tab({ onChange }: TabProps) {
  return (
    <SegmentedControl.Root
      defaultValue="co-following"
      radius="large"
      size="3"
      onValueChange={onChange}
      css={{
        width: "90%",
        border: `1px solid ${colors.gray4}`,
        padding: "0.5rem 0",
        boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <SegmentedControl.Item value="co-following">맞팔</SegmentedControl.Item>
      <SegmentedControl.Item value="follower">팔로워</SegmentedControl.Item>
      <SegmentedControl.Item value="following">팔로잉</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}
