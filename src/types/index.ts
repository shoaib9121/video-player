export interface IUser {
  username: string;
}

export interface ILogin {
  setToken: (token: string) => void;
}

export interface ILoginCredentials {
  username: string;
  password: string;
}

export interface IVideo {
  id: string;
  title: string;
  url: string;
  type: string;
  createdAt: string;
  description: string;
  comments: IComment[];
}

export interface IComment {
  id: number;
  comment: string;
  author: string;
  createdAt: string;
}
