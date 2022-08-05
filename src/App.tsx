import { Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import useToken from "./hooks/useToken";
import { Container, PageBody } from "./styled";
import AppProvider from "./hooks/useApp/app.provider";
import { fetchVideos } from "./services";
import { useEffect, useState } from "react";
import { IVideo } from "./types";
import RoutesComponent from "./routes";

const App = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const { token, setToken } = useToken();

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

  return (
    <AppProvider videos={videos}>
      <Container>
        <RoutesComponent />
      </Container>
    </AppProvider>
  );
};
export default App;
