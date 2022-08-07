import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { loginUser } from "../../services";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async () => {
    if (!username || !password) return;

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
    <CssVarsProvider>
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 400,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2" sx={{ mb: 2 }}>
            Sign in to continue
          </Typography>
          <TextField
            name="username"
            type="username"
            placeholder="shoaib123"
            label="Username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
            sx={{ mb: 2 }}
          />
          <TextField
            name="password"
            type="password"
            placeholder="********"
            label="Password"
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                handleSubmit();
              }
            }}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            onClick={handleSubmit}
            disabled={!username || !password}
            sx={{
              mt: 1,
            }}
          >
            Log in
          </Button>
        </div>
      </Sheet>
    </CssVarsProvider>
  );
};

export default Login;
