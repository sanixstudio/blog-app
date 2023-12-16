import React from "react";
import { useAuth } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user.user) {
    return <>{children}</>;
  } else return navigate("/");
};

export default ProtectedRoute;
