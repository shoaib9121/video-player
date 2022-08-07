import { createContext } from "react";
import { IAuthState } from "./auth.types";
export const AuthCtx = createContext({} as IAuthState);
