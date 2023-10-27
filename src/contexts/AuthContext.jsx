import { createContext, useContext } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
