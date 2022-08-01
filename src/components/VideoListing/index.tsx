import { memo, useCallback } from "react";
import { Grid, GridItem } from "./styled";
import { useNavigate } from "react-router-dom";

const VideoListing = (): JSX.Element => {
  let navigate = useNavigate();

  const handleClick = useCallback((videoId: string) => {
    navigate(`/video/${videoId}`, { replace: true });
  }, []);

  return (
    <Grid>
      <GridItem onClick={() => handleClick("1")}></GridItem>
      <GridItem onClick={() => handleClick("2")}></GridItem>
      <GridItem onClick={() => handleClick("3")}></GridItem>
      <GridItem onClick={() => handleClick("4")}></GridItem>
    </Grid>
  );
};

export default memo(VideoListing);
