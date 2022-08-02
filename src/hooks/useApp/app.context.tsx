import { createContext } from "react";
import { IAppState } from "./app.types";

export const AppCtx = createContext<IAppState>({} as IAppState);
