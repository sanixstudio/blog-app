import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const CreateNewBtn = () => {
  const { pathname } = useLocation();
  const isNewPost = pathname === "/new-post";

  if (!isNewPost) {
    return (
      <div className="fixed bottom-4 right-4">
        <a
          href="/new-post"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300"
        >
          <BsFillPlusCircleFill className="w-6 h-6" />
        </a>
      </div>
    );
  }
};

export default CreateNewBtn;
