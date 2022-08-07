import { memo, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IVideo } from "../../types";
import { findVideoById } from "../../utils";
import RelatedVideos from "./RelatedVideos";
import ReactPlayer from "react-player";
import { Grid, GridItemAside, GridItemVideo, VideoContainer } from "./styled";
import Comments from "../Comments";
import moment from "moment";

const Video = (): JSX.Element => {
  const { id = "" } = useParams();
  const location = useLocation();
  const [video, setVideo] = useState<IVideo>({} as IVideo);
  const { title, url, comments, createdAt } = video;

  useEffect(() => {
    setVideo(findVideoById(id));
  }, [location.pathname]);

  if (!Object.entries(video).length) {
    return <>No Video</>;
  }

  return (
    <Grid>
      <GridItemVideo>
        <VideoContainer>
          <ReactPlayer
            width="100%"
            height="100%"
            pip
            controls
            config={{ file: { forceHLS: true } }}
            url={url}
          />
          <h3>{title}</h3>
          <p>{id} </p>
          <span>{moment(createdAt).fromNow()}</span>
        </VideoContainer>
        <Comments comments={comments} />
      </GridItemVideo>
      <GridItemAside>
        <RelatedVideos video={video} />
      </GridItemAside>
    </Grid>
  );
};

export default memo(Video);
