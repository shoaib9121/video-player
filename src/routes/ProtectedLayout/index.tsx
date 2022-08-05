import { Navigate, useOutlet } from "react-router-dom";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import HomePage from "../../pages/Home";
import { PageBody } from "../../styled";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <PageBody>
        <HomePage />
      </PageBody>
      {outlet}
    </div>
  );
};
