import { Card, type CardProps } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface UserBoxProps {
  children: ReactNode;
}

type Props = UserBoxProps & CardProps;

export default function UserListItemBox({ children, ...props }: Props) {
  return (
    <Card variant="classic" {...props}>
      {children}
    </Card>
  );
}
