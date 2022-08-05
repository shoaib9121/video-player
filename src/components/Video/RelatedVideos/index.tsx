import { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IVideo } from "../../../types";
import { filterVideosByType } from "../../../utils";
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
            <ListItem
              key={item.id}
              style={{ background: item.type }}
              onClick={() => handleClick(item)}
            >
              {item.title}
              <p>{item.id} </p>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default memo(RelatedVideos);
