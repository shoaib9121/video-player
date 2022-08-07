import { useState } from "react";
import { IUser } from "../../types";

const useUser = () => {
  const getUser = () => {
    const userString = sessionStorage.getItem("user") || "";
    const userObj = userString && JSON.parse(userString);
    return userObj?.username;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (userObj: IUser) => {
    sessionStorage.setItem("user", JSON.stringify(userObj));
    setUser(userObj.username);
  };

  return {
    setUser: saveUser,
    user,
  };
};

export default useUser;
