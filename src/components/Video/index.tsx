import { memo, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IVideo } from "../../types";
import { findVideoById } from "../../utils";
import RelatedVideos from "./RelatedVideos";
import ReactPlayer from "react-player";
import { Grid, GridItemAside, GridItemVideo, VideoContainer } from "./styled";

const Video = (): JSX.Element => {
  const { id = "" } = useParams();
  const location = useLocation();
  const [video, setVideo] = useState<IVideo>({} as IVideo);

  useEffect(() => {
    setVideo(findVideoById(id));
    console.log("location => ", location.pathname);
  }, [location.pathname]);

  return (
    <Grid>
      <GridItemVideo>
        <VideoContainer>
          {video.id && (
            <ReactPlayer
              width="100%"
              height="100%"
              pip
              controls
              config={{ file: { forceHLS: true } }}
              url={video.url}
            />
          )}

          <h3>{video.title}</h3>
          <p>{video.id} </p>
        </VideoContainer>
      </GridItemVideo>
      <GridItemAside>
        {video.id && <RelatedVideos video={video} />}
      </GridItemAside>
    </Grid>
  );
};

export default memo(Video);
