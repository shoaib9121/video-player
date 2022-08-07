import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { loginUser } from "../../services";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!username && !password) return;

    const loginCredentials = {
      username,
      password,
    };
    const user = await loginUser(loginCredentials);
    if (user) {
      login && login(loginCredentials);
    }
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
          <button type="submit" disabled={!username && !password}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
