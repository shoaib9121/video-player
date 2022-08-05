import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Video from "../components/Video";
import Home from "../pages/Home";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/video">
        <Route path="/video/:id" element={<Video />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
