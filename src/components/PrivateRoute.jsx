import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "./Loader";

export const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <Loader />;
  if (!user) return <Navigate to="/login" state={location.pathname} replace />;

  return children;
};
