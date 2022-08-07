import { Container } from "./styled";
import AppProvider from "./hooks/useApp/app.provider";
import { fetchVideos } from "./services";
import { useEffect, useState } from "react";
import { IVideo } from "./types";
import RoutesComponent from "./routes";
import { useAuth } from "./hooks/useAuth";
import SettingsProvider from "./hooks/useSettings/settings.provider";
import { ISettings } from "./hooks/useSettings/settings.types";

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
  const defaultSettings: ISettings = {
    isComments: false,
  };

  return (
    <AppProvider videos={videos}>
      <SettingsProvider settings={defaultSettings}>
        <Container>
          <RoutesComponent />
        </Container>
      </SettingsProvider>
    </AppProvider>
  );
};
export default App;
