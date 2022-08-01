import Login from "./components/Login";
import useToken from "./hooks/useToken";
import ProtectedRoutes from "./routes";

const App = () => {
  const { token, setToken = "some-token" } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <ProtectedRoutes />;
};
export default App;
