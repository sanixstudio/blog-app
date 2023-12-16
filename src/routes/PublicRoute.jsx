import { useAuth } from "../context/userContext";

const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  return <div>{children}</div>;
};

export default PublicRoute;
