import { ILogin, ILoginCredentials, IVideo } from "../types";
import config from "../utils/config";
import { BASE_URL, DEFAULT_TOKEN } from "../utils/constants";

export const loginUser = async (
  credentials: ILoginCredentials
): Promise<string> => {
  try {
    return Promise.resolve(DEFAULT_TOKEN);
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

// export const loginUser = async (
//   credentials: ILoginCredentials
// ): Promise<ILogin> => {
//   try {
//     const resp = await fetch(`${BASE_URL}${config.login.uri}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
//     });
//     return await resp.json();
//   } catch (_e) {
//     throw new Error("something went wrong");
//   }
// };
