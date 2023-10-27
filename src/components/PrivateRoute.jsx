import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = null;
  const location = useLocation();

  if (!user) return <Navigate to="/login" state={location.pathname} />;

  return children;
};
