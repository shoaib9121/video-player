import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";
import { useLocalStorage } from "../useLocalStorage";
import useToken from "../useToken";
import { AuthCtx } from "./auth.context";
import { IAuthState } from "./auth.types";

const AuthProvider: FC<IAuthState> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const { setToken } = useToken();
  const navigate = useNavigate();

  const login = async (data: IUser, token: string) => {
    setUser(data);
    // setToken(token);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    setToken("");
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};

export default AuthProvider;
