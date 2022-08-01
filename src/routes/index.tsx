import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/video' element={<Home/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
