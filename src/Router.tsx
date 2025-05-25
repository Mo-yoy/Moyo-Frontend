import GlobalLayout from "@/common/components/GlobalLayout";
import { authLoader } from "@/loaders/authLoader";
import { LoginPage } from "@/Login/page";
import MenuPage from "@/Menu/page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        loader: authLoader,
        children: [
          {
            path: "menu",
            element: <MenuPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);
