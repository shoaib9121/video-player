import { Navigate, useOutlet } from "react-router-dom";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import { PageBody } from "../../styled";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header
        items={[
          { name: "Home", path: "/" },
          { name: "Settings", path: "/settings" },
        ]}
      />
      <PageBody>{outlet}</PageBody>
    </div>
  );
};
