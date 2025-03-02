import GlobalLayout from "@/common/components/GlobalLayout";
import { LoginPage } from "@/Login/page";
import MenuPage from "@/Menu/page";
import { Route, Routes } from "react-router";

export default function Router() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="menu" element={<MenuPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
