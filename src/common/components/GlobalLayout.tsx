import { Theme } from "@radix-ui/themes";
import { Outlet } from "react-router";

export default function GlobalLayout() {
  return (
    <Theme>
      <Outlet />
    </Theme>
  );
}
