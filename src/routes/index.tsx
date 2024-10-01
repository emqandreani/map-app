import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<h1>Map?</h1>} path="/" />
    </Routes>
  );
};

export default AppRoutes;
