import { memo, useCallback } from "react";
import { Grid, GridItem } from "./styled";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { IVideo } from "../../types";

const VideoListing = (): JSX.Element => {
  let navigate = useNavigate();
  const { videos = [] } = useApp();

  const handleClick = useCallback((video: IVideo) => {
    navigate(`/video/${video.id}`, { replace: true });
  }, []);

  if (!videos.length) {
    return <></>;
  }

  return (
    <Grid>
      {videos.map((video) => {
        return (
          <GridItem
            key={video.id}
            onClick={() => handleClick(video)}
          ></GridItem>
        );
      })}
    </Grid>
  );
};

export default memo(VideoListing);
