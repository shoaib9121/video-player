import { useContext } from "react";
import { AuthCtx } from "./auth.context";

export const useAuth = () => {
  return useContext(AuthCtx);
};
