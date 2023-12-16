import React from "react";
import { CreateNewBtn, Navbar } from "../components";
import { useAuth } from "../context/userContext";

const Layout = ({ children }) => {
  const { user } = useAuth();
  const userProfile = user.user;

  return (
    <>
      <Navbar />
      {userProfile && <CreateNewBtn />}
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </>
  );
};

export default Layout;
