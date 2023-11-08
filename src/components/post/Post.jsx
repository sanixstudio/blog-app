import React from "react";

const Post = ({ post }) => {
  const { _id, title, timestamp, body, author } = post;

  return (
    <div className="flex flex-col items-center md:justify-between text-center md:text-left md:flex-row gap-5 mx-auto my-0 max-w-screen-xl mt-20 px-4">
      {/* <img width={400} src={post.image} alt="cutie" /> */}
      <div className="self-start">
        <a href={`/post/${_id}`}>
          <h1 className="text-4xl font-bold">{title}</h1>
        </a>
        <span className="font-bold inline-block mr-2 my-4 text-gray-600">
          {author?.username || "Anonymous"}
        </span>
        <span className="font-bold text-gray-400">
          {new Date(timestamp).toLocaleDateString()}
        </span>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
