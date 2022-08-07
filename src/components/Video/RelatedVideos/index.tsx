import { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IVideo } from "../../../types";
import { filterVideosByType } from "../../../utils";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import thumb1 from "../../../images/thumb-1.jpeg";
import { List, ListItem } from "./styled";

const RelatedVideos = ({ video = {} as IVideo }): JSX.Element => {
  const navigate = useNavigate();
  const [relatedVideos, setRelatedVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    setRelatedVideos(filterVideosByType(video));
  }, []);

  const handleClick = useCallback((videoObj: IVideo) => {
    setRelatedVideos(filterVideosByType(videoObj));
    navigate(`/video/${videoObj.id}`, { replace: true });
  }, []);

  if (!relatedVideos.length) {
    return <>No related videos</>;
  }

  return (
    <>
      <h3>Related Videos</h3>
      <List>
        {!!relatedVideos.length &&
          relatedVideos.map((item) => (
            <ListItem key={item.id} onClick={() => handleClick(item)}>
              <Grid container display="flex" flexWrap="nowrap" gap={2}>
                <Grid item width="100px">
                  <Box
                    className="thumb-wrapper"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img src={thumb1} />
                    <Box
                      className="overlay"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      height="100%"
                    >
                      <PlayCircleFilledWhiteIcon
                        className="play-icon"
                        style={{ fontSize: 30 }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography
                    className="title"
                    variant="body2"
                    component="div"
                    color="gray"
                  >
                    {item.title}
                  </Typography>
                  <Chip
                    className="chip"
                    label={item.type}
                    style={{ background: item.type }}
                  />
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default memo(RelatedVideos);
