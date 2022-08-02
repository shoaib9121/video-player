import { IVideo } from "../types";
import { videos } from "./videos";

export const findVideoById = (id: string = '') =>
  videos.find((video) => video.id === id) || ({} as IVideo);

export const filterVideosByType = (video = {} as IVideo) =>
  videos.filter((item) => item.id !== video.id && item.type === video.type) || ({} as IVideo);
