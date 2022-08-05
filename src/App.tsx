import { Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import useToken from "./hooks/useToken";
import { Container, PageBody } from "./styled";
import ProtectedRoutes from "./routes";
import { DEFAULT_TOKEN } from "./utils/constants";
import AppProvider from "./hooks/useApp/app.provider";
import { fetchVideos } from "./services";
import { useEffect, useState } from "react";
import { IVideo } from "./types";
import useUser from "./hooks/useUser";

const App = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const { token, setToken } = useToken();
  const { setUser } = useUser();

  useEffect(() => {
    if (token) {
      getVideos();
    }
  }, []);

  const getVideos = async () => {
    const data = await fetchVideos();
    if (data) {
      setVideos(data);
    }
  };

  if (!token) {
    // return <Navigate to="/login" state={{ from: location }} replace />;
    return <Login setToken={setToken} />;
  }

  return (
    <AppProvider videos={videos}>
      <Container></Container>
    </AppProvider>
  );
};
export default App;
