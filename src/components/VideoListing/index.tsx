import { memo, useCallback } from "react";
import { Grid, GridItem } from "./styled";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { IVideo } from "../../types";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import thumb1 from "../../images/thumb-1.jpeg";

const VideoListing = (): JSX.Element => {
  const navigate = useNavigate();
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
          <GridItem key={video.id} onClick={() => handleClick(video)}>
            <img src={thumb1} />
            <Chip
              className="chip"
              label={video.type}
              style={{ background: video.type }}
            />
            <Box
              className="overlay"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <PlayCircleFilledWhiteIcon
                className="play-icon"
                style={{ fontSize: 70 }}
              />
            </Box>
            <Box className="title">
              <span> {video.title}</span>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default memo(VideoListing);
