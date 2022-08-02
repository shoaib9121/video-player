import { FC, useMemo } from "react";
import { AppCtx } from "./app.context";
import { IAppState } from "./app.types";

const AppProvider: FC<IAppState> = ({ children, ...props }) => {
  const state = useMemo(() => {
    return props;
  }, [...Object.values(props)]);
  return <AppCtx.Provider value={state}>{children}</AppCtx.Provider>;
};

export default AppProvider;
