import React, { useState } from "react";
import { useAuth } from "../../context/userContext";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";

import SmashLogo from "../../assets/images/smash_logo.png";

const MobileMenu = ({ isOpen, closeMenu }) => {
  if (isOpen) {
    return (
      <div className="fixed top-0 left-0 flex w-1/2 h-screen justify-center items-center bg-black/80 text-white">
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
          <Button onClick={closeMenu} className="absolute top-2 right-4">
            <span className="text-4xl">x</span>
          </Button>
          <span>LOGO</span>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  } else return null;
};

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { user, userLogout } = useAuth();
  const capitalizeFirstLetter = (string) =>
    string
      ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
      : "";

  const isNewPost = pathname === "/new-post";
  const userProfile = user.user;

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 py-2">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src={SmashLogo}
            className="mr-3 w-full max-w-[72px]"
            alt="blog-app logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Blog
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={openMenu}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:flex items-center md:w-auto"
          id="navbar-default"
        >
          {userProfile && (
            <div className="flex items-center gap-2 mr-10">
              <BiSolidUserCircle size={28} color="white" />
              <span className="text-white font-bold text-2xl mr-4">
                {capitalizeFirstLetter(userProfile.name)}
              </span>
              {!isNewPost && (
                <a
                  href="/new-post"
                  className="text-white flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 duration-300"
                >
                  <BsFillPlusCircleFill />
                  <span>New Post</span>
                </a>
              )}
            </div>
          )}
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            {userProfile ? (
              <>
                <li>
                  <a
                    href="/dashboard"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    DASHBOARD
                  </a>
                </li>
                <li
                  onClick={() => userLogout()}
                  className="flex items-center gap-2 py-2 pl-3 pr-4 text-gray-700 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span>LOGOUT</span>
                  <span>
                    <FiLogOut size={20} />
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    href="/login"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    LOGIN
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    REGISTER
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;
