import { useState } from "react";
import { IToken } from "../../types";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token") || "";
    const userToken = tokenString && JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: IToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
