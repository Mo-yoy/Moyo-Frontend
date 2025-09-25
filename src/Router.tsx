import { FollowPage } from "@/Follow/page";
import { LoginPage } from "@/Login/page";
import MenuPage from "@/Menu/page";
import GlobalLayout from "@/common/components/GlobalLayout";
import { authLoader } from "@/loaders/authLoader";
import { createBrowserRouter } from "react-router";
import { RankingPage } from "./Ranking/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        loader: authLoader,
        children: [
          {
            path: "menu",
            element: <MenuPage />,
          },
          {
            path: "ranking",
            element: <RankingPage />,
          },
          {
            path: "follow",
            element: <FollowPage />,
          },
        ],
      },
    ],
  },
]);
