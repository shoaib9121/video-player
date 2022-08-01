import { ILogin, ILoginCredentials, IToken } from "../types";
import config from "../utils/config";
import { BASE_URL } from "../utils/constants";

export const loginUser = async (
  credentials: ILoginCredentials
): Promise<IToken> => {
  try {
    const dummyResp = {
      token:
        "CfDJ8OW5OI0CPGJBgSNlGwO0x4YF7qbYKVv7KOO-N0eFtDUzXOrL7F9Xd9W1otVi4ueJOkAmAhuoHFWNkqRaFD7zvAMHMSKncl6Vo5QXKmpvy6vqxOKxSURdIey8aZPRi3Nnhp2p9la-Al5xrVKz0lignRdcCHf3O7pF9zv_sNx_c_T7pUe3WsxaJEPX3t_9FO2Wjw",
    };
    return Promise.resolve(dummyResp);
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
