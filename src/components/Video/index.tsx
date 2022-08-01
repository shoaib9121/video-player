import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Video = (): JSX.Element => {
  let { id } = useParams();

  useEffect(() => {
    console.log(JSON.stringify({ id }));
  }, []);

  return <>Video Page {id} </>;
};

export default memo(Video);
