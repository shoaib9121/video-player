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
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/video">
          <Route path="/video/:id" element={<VideoPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
