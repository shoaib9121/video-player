import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";
import { useLocalStorage } from "../useLocalStorage";
import { AuthCtx } from "./auth.context";
import { IAuthState } from "./auth.types";

const AuthProvider: FC<IAuthState> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data: IUser) => {
    setUser(data);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
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
