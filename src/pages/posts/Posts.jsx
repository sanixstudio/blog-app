import React from "react";
import { Post } from "../../components";
import useFetchPosts from "../../hooks/useFetchPosts";

const Posts = () => {
  const { posts, error, loading } = useFetchPosts();

  if (error) return <h1 className="text-4xl">Error</h1>;
  if (loading) return <h1 className="text-4xl">Loading...</h1>;
  return posts.reverse().map((post) => <Post key={post._id} post={post} />);
};

export default Posts;
