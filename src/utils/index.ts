import { IVideo } from "../types";
import { videos } from "./videos";

export const filterVideoData = (id: string = '') =>
  videos.find((video) => video.id === id) || ({} as IVideo);
