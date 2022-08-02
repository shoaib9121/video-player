import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IVideo } from "../../types";
import { findVideoById } from "../../utils";
import RelatedVideos from "./RelatedVideos";
import { Grid, GridItemAside, GridItemVideo, VideoContainer } from "./styled";

const Video = (): JSX.Element => {
  let { id = "" } = useParams();
  const [video, setVideo] = useState<IVideo>({} as IVideo);

  useEffect(() => {
    setVideo(findVideoById(id));
  }, []);

  return (
    <Grid>
      <GridItemVideo>
        <VideoContainer style={{ background: video.type }}>
          <h3>{video.title}</h3>
        </VideoContainer>
      </GridItemVideo>
      <GridItemAside>
        {video.id && <RelatedVideos video={video} />}
      </GridItemAside>
    </Grid>
  );
};

export default memo(Video);
