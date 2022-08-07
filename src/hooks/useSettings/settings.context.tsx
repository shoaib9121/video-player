import { createContext } from "react";
import { ISettingsState } from "./settings.types";
export const SettingsCtx = createContext({} as ISettingsState);
