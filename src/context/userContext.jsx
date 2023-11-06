// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null, username: null });

  useEffect(() => {
    // Check if a token exists in local storage or cookies
    const token = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    if (token) {
      setUser({ token, username });
    }
  }, []);

  const userLogin = (token, username) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("username", username);
    setUser({ token, username });
  };

  const userLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setUser({ token: null, username: null });
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
