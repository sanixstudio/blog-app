import React from "react";
import { CreateNewBtn, Navbar } from "../components";
import { useAuth } from "../context/userContext";

const Layout = ({ children }) => {
  const { user } = useAuth();
  const userProfile = user.user;

  return (
    <div>
      <Navbar />
      {userProfile && <CreateNewBtn />}
      <div className="w-full mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
