import { memo, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IVideo } from "../../types";
import { findVideoById, timeAgo } from "../../utils";
import RelatedVideos from "./RelatedVideos";
import ReactPlayer from "react-player";
import {
  Grid,
  GridItemAside,
  GridItemVideo,
  VideoContainer,
  VideoOuter,
} from "./styled";
import Comments from "../Comments";
import { useSettings } from "../../hooks/useSettings";
import Typography from "@mui/material/Typography";

const Video = (): JSX.Element => {
  const { id = "" } = useParams();
  const location = useLocation();
  const { settings } = useSettings();
  const [video, setVideo] = useState<IVideo>({} as IVideo);
  const { title, url, comments, description, createdAt } = video;

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
          <VideoOuter>
            <ReactPlayer
              width="100%"
              height="100%"
              pip
              controls
              config={{ file: { forceHLS: true } }}
              url={url}
            />
          </VideoOuter>
          <Typography variant="h4" sx={{ marginTop: "30px" }} gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: "16px", color: "gray" }}
            gutterBottom
          >
            {timeAgo(createdAt)}
          </Typography>
          <Typography variant="body1" sx={{ margin: "15px 0" }} gutterBottom>
            {description}
          </Typography>
        </VideoContainer>
        {settings.isComments && <Comments comments={comments} />}
      </GridItemVideo>
      <GridItemAside>
        <RelatedVideos video={video} />
      </GridItemAside>
    </Grid>
  );
};

export default memo(Video);
