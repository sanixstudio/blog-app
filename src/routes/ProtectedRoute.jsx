import React from "react";
import { useAuth } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user.user) {
    return <div>{children}</div>;
  } else return navigate("/");
};

export default ProtectedRoute;
