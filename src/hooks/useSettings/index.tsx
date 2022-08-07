import { useContext } from "react";
import { SettingsCtx } from "./settings.context";

export const useSettings = () => {
  return useContext(SettingsCtx);
};
