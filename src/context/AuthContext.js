import React, { createContext, useContext, useMemo, useState, useCallback } from "react";
import PolaroidsAuth from "../handlers/auth";

const { signIn, signOut, getCurrentUser } = PolaroidsAuth;
const Context = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback(() => {
    signIn().then(setCurrentUser).then(() => window.location.reload());
  }, []);

  const logout = useCallback(() => {
    signOut().then(() => setCurrentUser(null)).then(() => window.location.reload());
  }, []);

  const authenticate = useCallback(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const value = useMemo(() => {
    return {
      login,
      logout,
      authenticate,
      currentUser,
    };
  }, [login, logout, currentUser, authenticate]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAuthContext = () => {
  return useContext(Context);
};

export default AuthProvider;
