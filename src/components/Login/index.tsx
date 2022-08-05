import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { loginUser } from "../../services";
import { ILogin } from "../../types";

const Login = ({ setToken }: ILogin) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const loginCredentials = {
      username,
      password,
    };
    const token = await loginUser(loginCredentials);
    // setToken(token);
    login(loginCredentials);
    // setUser({ username });
  };

  return (
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
