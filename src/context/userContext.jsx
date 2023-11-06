// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null, user: null });

  useEffect(() => {
    // Check if a token exists in local storage or cookies
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    if (token) {
      setUser({ token, user: parsedUser });
    }
  }, []);

  const userLogin = (token, user) => {
    localStorage.setItem("authToken", token);
    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem("user", stringifiedUser);
    setUser({ token, user });
  };

  const userLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser({ token: null, user: null });
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
