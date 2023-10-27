import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = null;

  if (!user) return navigate("/login");

  return children;
};
