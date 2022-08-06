import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token") || "";
    const userToken = tokenString && JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token: string) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    setToken(token);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
