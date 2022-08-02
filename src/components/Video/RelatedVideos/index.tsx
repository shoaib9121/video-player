import { memo, useEffect, useState } from "react";
import { IVideo } from "../../../types";
import { filterVideosByType } from "../../../utils";
import { List, ListItem } from "./styled";

const RelatedVideos = ({ video = {} as IVideo }): JSX.Element => {
  const [relatedVideos, setRelatedVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    setRelatedVideos(filterVideosByType(video));
    console.log(filterVideosByType(video));
  }, []);

  if (!relatedVideos.length) {
    return <>No related videos</>;
  }

  return (
    <List>
      {!!relatedVideos.length &&
        relatedVideos.map((item) => (
          <ListItem style={{ background: item.type }} key={item.id}>
            {item.title}
          </ListItem>
        ))}
    </List>
  );
};

export default memo(RelatedVideos);
