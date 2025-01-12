import { css } from "@emotion/react";
import { Blockquote, Card, Checkbox, Heading } from "@radix-ui/themes";
import { version } from "react";

export default function MenuPage() {
  return (
    <>
      {version}
      <Card variant="surface">menu</Card>
      <Checkbox defaultChecked />
      <Heading size="6" css={css({ color: "red" })}>
        heading
      </Heading>
      <p>안녕 정우</p>
      <p>안녕 연서</p>
      <p>안녕 서현</p>
      <Blockquote weight="bold">quote quote</Blockquote>
    </>
  );
}
