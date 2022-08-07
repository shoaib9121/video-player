import moment from "moment";
import { IComment, IVideo } from "../types";
import { videos } from "./videos";

export const findVideoById = (id: string = "") =>
  videos.find((video) => video.id === id) || ({} as IVideo);

export const filterVideosByType = (video = {} as IVideo) =>
  videos.filter((item) => item.id !== video.id && item.type === video.type) ||
  ({} as IVideo);

export const timeAgo = (time: any): string => moment(time).fromNow();

export const sortByDate = (comments: IComment[]): any[] => {
  const tempComments: any[] = comments.map((comment: IComment) => {return {...comment, createdAt: new Date(comment.createdAt)}})
  return  tempComments.sort((a,b) =>  b.createdAt - a.createdAt)
};
