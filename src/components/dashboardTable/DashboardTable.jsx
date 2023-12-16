import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const DashboardTable = ({ currentPosts, openModal }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4">Title</th>
          {/* <th className="py-2 px-4">Body</th> */}
          {/* <th className="py-2 px-4">Author</th> */}
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentPosts.map((post) => (
          <tr key={post._id} className="hover:bg-gray-100">
            <td className="py-2 px-4 font-semibold truncate">
              <a href={`/post/${post._id}`}> {post.title}</a>
            </td>
            {/* <td className="py-2 flex-1 line-clamp-1 px-4 leading-10">
              {post.body}
            </td> */}
            {/* <td>{post.author.username}</td> */}
            <td className="py-2 px-4">
              {new Date(post.timestamp).toLocaleDateString()}
            </td>
            <td className="flex py-2 px-4">
              <a
                href={`/post/${post._id}`}
                className="flex justify-center items-center bg-gray-400 hover:bg-gray-600 text-white font-medium py-1 px-2 rounded-lg mr-2"
              >
                <FaRegEye />
              </a>
              <a
                href={`/post/edit/${post._id}`}
                className="flex justify-center items-center bg-blue-400 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded-lg mr-2"
              >
                <AiOutlineEdit />
              </a>
              <button
                onClick={openModal}
                className="flex justify-center items-center bg-red-400 hover:bg-red-600 text-white font-medium py-1 px-2 rounded-lg"
              >
                <AiOutlineDelete size={24} color="white" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardTable;
