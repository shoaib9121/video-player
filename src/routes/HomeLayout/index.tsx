import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      {outlet}
    </div>
  );
};
