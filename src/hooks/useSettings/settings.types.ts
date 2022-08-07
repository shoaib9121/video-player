export interface ISettingsState {
  settings: ISettings;
  toggleComments?: (toggle: boolean) => void;
  children?: React.ReactNode;
}

export interface ISettings {
  isComments: boolean;
}
