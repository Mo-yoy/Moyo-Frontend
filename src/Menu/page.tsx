import UserListItemBox from "@/common/components/UserListItemBox";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Blockquote, Card, Checkbox, Flex, Heading, Radio, Text } from "@radix-ui/themes";
import { version } from "react";
import { Link } from "react-router";

export default function MenuPage() {
  return (
    <>
      {version}
      <Card variant="surface">menu</Card>
      <Checkbox defaultChecked />
      <Heading size="6" css={css({ color: "red" })}>
        heading
      </Heading>
      <Blockquote weight="bold">quote quote</Blockquote>

      <UserListContainer>
        <Flex direction="column" gap="2">
          <UserListItemBox asChild>
            <Link to="/">
              <Flex>유저1</Flex>
            </Link>
          </UserListItemBox>

          <UserListItemBox asChild>
            <button type="button" onClick={() => console.log("here")}>
              유저2
            </button>
          </UserListItemBox>

          <UserListItemBox>
            <Flex gap="3">
              <Text as="label" size="2">
                <Radio name="example" value="1" defaultChecked color="indigo" />
                Default
              </Text>

              <Text as="label" size="2">
                <Radio name="example" value="1" color="cyan" />
                Comfortable
              </Text>
            </Flex>
          </UserListItemBox>

          <UserListItemBox>유저4</UserListItemBox>
        </Flex>
      </UserListContainer>
    </>
  );
}

const UserListContainer = styled.div({
  width: "100vw",
  padding: "10px",
});
