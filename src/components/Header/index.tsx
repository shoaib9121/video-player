import { Link } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { IToken } from "../../types";

const Header = (): JSX.Element => {
  const { setToken } = useToken();
  return (
    <header>
      <Link to="/">Home</Link>
      <button onClick={() => setToken({} as IToken)}>Logout</button>
    </header>
  );
};

export default Header;
