import { ILoginCredentials, IVideo } from "../types";

export const loginUser = async (
  credentials: ILoginCredentials
): Promise<ILoginCredentials> => {
  try {
    return await Promise.resolve({ ...credentials });
  } catch (_e) {
    throw new Error("something went wrong");
  }
};

export const fetchVideos = async (): Promise<IVideo[]> => {
  try {
    const resp = await fetch("../data/videos.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return resp.json();
  } catch (_e) {
    throw new Error("something went wrong");
  }
};
