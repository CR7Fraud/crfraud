import React, { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const user = null;
  const isAuthenticated = false;
  const isLoadingAuth = false;
  const isLoadingPublicSettings = false;
  const authChecked = true;
  const authError = null;
  const appPublicSettings = null;
  const logout = () => {};
  const navigateToLogin = () => {};
  const checkAppState = () => {};
  const checkUserAuth = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authChecked,
        authError,
        appPublicSettings,
        logout,
        navigateToLogin,
        checkAppState,
        checkUserAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
