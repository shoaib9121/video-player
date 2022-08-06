import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface IHeaderProps {
  items: ILink[];
}
interface ILink {
  name: string;
  path: string;
}

const Header: FC<IHeaderProps> = (props): JSX.Element => {
  const { user, logout } = useAuth();
  const { items } = props;

  return (
    <header>
      {items.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.name}
        </Link>
      ))}
      {user && (
        <>
          Welcome {user?.username}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </header>
  );
};

export default Header;
