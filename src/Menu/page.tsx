import { PRRequest } from "@/Menu/components/PRRequest";
import { PersonalRank } from "@/Menu/components/PersonalRank";
import { UserInfo } from "@/Menu/components/UserInfo";
import { BottomNav } from "@/common/components/BottomNav";
import Header from "@/common/components/Header";
import Spacer from "@/common/components/Spacer";
import { rem } from "@/common/utils/rem";
import styled from "@emotion/styled";
import { Text } from "@radix-ui/themes";

export default function MenuPage() {
  return (
    <>
      <Header renderLeft={() => <Text weight="bold">Moyoy</Text>} />
      <Container>
        <Spacer height={2} />
        <UserInfo />
        <Spacer height={2} />
        <PersonalRank />
        <Spacer height={2} />
        <PRRequest />
      </Container>
      <BottomNav />
    </>
  );
}

const Container = styled.div({
  width: "100vw",

  padding: `0 ${rem(1)}`,
});
