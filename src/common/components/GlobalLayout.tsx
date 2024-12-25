import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

const queryClient = new QueryClient();

export default function GlobalLayout() {
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </Theme>
  );
}
