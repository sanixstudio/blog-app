import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const CreateNewBtn = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="/new-post"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300"
      >
        <BsFillPlusCircleFill className="w-6 h-6" />
      </a>
    </div>
  );
};

export default CreateNewBtn;
