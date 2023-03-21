import { Routes, Route } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { Navbar } from "../ui/components/index.js";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
