import { ILoginCredentials, IUser } from "../../types";

export interface IAuthState {
  user?: IUser;
  logout?: () => void;
  children?: React.ReactNode;
  login?: (loginCredentials: ILoginCredentials, token: string) => void;
}