import React, { createContext, useContext, useMemo, useState, useCallback } from "react";
import PolaroidsAuth from "../handlers/auth";

// Destructuring methods from PolaroidsAuth
const { signIn, signOut, getCurrentUser } = PolaroidsAuth;

// Creating a context for authentication
const Context = createContext();

const AuthProvider = ({ children }) => {
  // State to keep track of the current user
  const [currentUser, setCurrentUser] = useState(null);

  // Callback function to handle user login
  const login = useCallback(() => {
    // Sign in, update current user, and reload the page
    signIn().then(setCurrentUser).then(() => window.location.reload());
  }, []);

  // Callback function to handle user logout
  const logout = useCallback(() => {
    // Sign out, update current user, and reload the page
    signOut().then(() => setCurrentUser(null)).then(() => window.location.reload());
  }, []);

  // Callback function to authenticate and update the current user
  const authenticate = useCallback(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  // Memoized context value to avoid unnecessary renders
  const value = useMemo(() => {
    return {
      login,
      logout,
      authenticate,
      currentUser,
    };
  }, [login, logout, currentUser, authenticate]);

  // Providing the context value to the component tree
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// Custom hook to consume the authentication context
export const useAuthContext = () => {
  return useContext(Context);
};

export default AuthProvider;
