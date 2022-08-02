import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IVideo } from "../../types";
import { filterVideoData } from "../../utils";
import { Grid, GridItemAside, GridItemVideo, List, ListItem } from "./styled";

const Video = (): JSX.Element => {
  let { id = "" } = useParams();
  const [video, setVideo] = useState<IVideo>({} as IVideo);

  useEffect(() => {
    const foundVideo = filterVideoData(id);
    if (foundVideo) {
      setVideo(foundVideo);
    }
  }, []);

  return (
    <Grid>
      <GridItemVideo>
        <h3>{video.title}</h3>
      </GridItemVideo>
      <GridItemAside>
        <List>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </List>
      </GridItemAside>
    </Grid>
  );
};

export default memo(Video);
