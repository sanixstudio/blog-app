import React from "react";
import { Navbar } from "../components";
import CreateNewBtn from "../components/createNewBtn/CreateNewBtn";
import { useAuth } from "../context/userContext";

const Layout = ({ children }) => {
  const { user } = useAuth();
  const userProfile = user.user;

  return (
    <>
      <Navbar />
      {userProfile && <CreateNewBtn />}
      <div className="max-w-[1440px] mx-auto px-4">{children}</div>
    </>
  );
};

export default Layout;
