import { Routes, Route, BrowserRouter } from "react-router-dom";
import Video from "../components/Video";
import Home from "../pages/Home";

const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video">
          <Route path="/video/:id" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
