import React from "react";
import { IVideo } from "../../types";

export interface IAppState {
  videos: IVideo[];
  children?: React.ReactNode;
}
