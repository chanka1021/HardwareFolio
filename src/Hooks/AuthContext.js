import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

// Create a context for managing authentication
export const AuthContext = createContext();

// Custom hook to access the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap your entire application
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up function
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  // Sign in function
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  // Sign out function
  const logout = () => {
    return auth.signOut();
  };

  // Listen for auth state changes and update currentUser accordingly
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Value object to be passed to the AuthContext.Provider
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
