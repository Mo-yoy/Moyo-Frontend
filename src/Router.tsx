import { Route, Routes } from "react-router";
import MenuPage from "./Menu/page";
import GlobalLayout from "./common/components/GlobalLayout";

export default function Router() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="menu" element={<MenuPage />} />
      </Route>
    </Routes>
  );
}
