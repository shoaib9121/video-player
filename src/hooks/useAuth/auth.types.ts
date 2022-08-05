import { ILoginCredentials, IUser } from "../../types";

export interface IAuthState {
  user?: IUser;
  login: (loginCredentials: ILoginCredentials) => void
  children?: React.ReactNode;
}