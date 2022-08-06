import { Container } from "./styled";
import AppProvider from "./hooks/useApp/app.provider";
import { fetchVideos } from "./services";
import { useEffect, useState } from "react";
import { IVideo } from "./types";
import RoutesComponent from "./routes";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
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
