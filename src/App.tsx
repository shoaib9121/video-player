import { BrowserRouter } from "react-router-dom";
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

const App = () => {
  const { token, setToken = DEFAULT_TOKEN } = useToken();
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    if (token) {
      getVideos();
    }
  }, []);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const getVideos = async () => {
    const data = await fetchVideos();
    if (data) {
      setVideos(data);
    }
    console.log(data);
  };

  return (
    <BrowserRouter>
      <AppProvider videos={videos}>
        <Container>
          <Header />
          <PageBody>
            <ProtectedRoutes />
          </PageBody>
        </Container>
      </AppProvider>
    </BrowserRouter>
  );
};
export default App;
