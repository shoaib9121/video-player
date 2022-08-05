import { FC, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";
import { useLocalStorage } from "../useLocalStorage";
// import useUser from "../useUser";
import { AuthCtx } from "./auth.context";
import { IAuthState } from "./auth.types";

export const AuthProvider: FC<IAuthState> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  // const { user, setUser } = useUser();
  const navigate = useNavigate();

  const login = async (data: IUser) => {
    setUser(data);
    navigate("/home");
  };

  const logout = () => {
    setUser(null);
    // setUser({} as IUser);
    navigate("/", { replace: true });
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

export const useAuth = () => {
  return useContext(AuthCtx);
};
