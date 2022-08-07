import { FC, useMemo, useState } from "react";
import { SettingsCtx } from "./settings.context";
import { ISettings, ISettingsState } from "./settings.types";

const SettingsProvider: FC<ISettingsState> = (props) => {
  const { children } = props;
  const [settings, setSettings] = useState(props.settings || ({} as ISettings));

  const toggleComments = (toggle: boolean) => {
    setSettings({ ...settings, isComments: toggle });
  };

  const value = useMemo(
    () => ({
      settings,
      toggleComments,
    }),
    [settings]
  );
  return <SettingsCtx.Provider value={value}>{children}</SettingsCtx.Provider>;
};

export default SettingsProvider;
