import React from "react";
import TimeAgo from "react-timeago";
import parse from "html-react-parser";

const Card = ({ post }) => {
  return (
    <a
      href={`/post/${post._id}`}
      className="flex flex-col justify-between border hover:shadow-2xl hover:border-gray-400 transition ease-in rounded-[16px] overflow-hidden shadow-lg bg-white"
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-3 mt-">{post.title}</h2>
        <div className="text-gray-700 text-base line-clamp-3">
          {parse(post.body)}
        </div>
      </div>
      <div className="px-4 pt-4 pb-4 flex gap-8 justify-between items-center border-t border-gray-100">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-4"
            src="https://picsum.photos/id/737/200/300"
            alt="Avatar of Writer"
          />
          <div className="text-sm">
            <span className="text-black leading-none font-bold">
              {post.author.username}
            </span>
            <p className="text-gray-600">
              <TimeAgo date={post.timestamp} />
            </p>
          </div>
        </div>
        <div>
          <span className="border bg-gray-50 py-1 px-3 rounded-lg text-xs">
            Education
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
