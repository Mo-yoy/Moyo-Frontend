import { css } from "@emotion/react";
import { Blockquote, Card, Checkbox, Heading } from "@radix-ui/themes";

export default function MenuPage() {
  return (
    <>
      <Card variant="surface">menu</Card>
      <Checkbox defaultChecked />
      <Heading size="6" css={css({ color: "red" })}>
        heading
      </Heading>
      <Blockquote weight="bold">quote quote</Blockquote>
    </>
  );
}
