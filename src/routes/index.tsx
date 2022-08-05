import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/Login";
import VideoPage from "../components/Video";
import HomePage from "../pages/Home";
import { HomeLayout } from "./HomeLayout";
import { ProtectedLayout } from "./ProtectedLayout";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/video" element={<ProtectedLayout />}>
        <Route path="/video/:id" element={<VideoPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
