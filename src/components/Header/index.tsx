import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface IHeaderProps {
  items: ILink[];
}
interface ILink {
  name: string;
  path: string;
}

const Header: FC<IHeaderProps> = (props): JSX.Element => {
  const { logout } = useAuth();
  const [storeValue] = useLocalStorage("user", null);
  const { items } = props;
  const { user } = useAuth();

  return (
    <header>
      {items.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.name}
        </Link>
      ))}
      {user && (
        <>
          Welcome {storeValue?.username}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </header>
  );
};

export default Header;
