import { useContext } from "react";
import { AppCtx } from "./app.context";

export const useApp = () => {
  return useContext(AppCtx);
};
