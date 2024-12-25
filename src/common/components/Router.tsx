import { Route, Routes } from "react-router";
import MenuPage from "../../Menu/page";

export default function Router () {
return <Routes>
  <Route index element={<></>} />
  <Route path="menu" element={<MenuPage />} />  
</Routes>
}