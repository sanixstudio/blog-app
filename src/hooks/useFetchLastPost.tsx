import { useEffect, useState } from "react";
import useFetchPosts from "./useFetchPosts";

const useFetchLastPost = () => {
  const { loading, error, posts } = useFetchPosts();

  const lastPost = posts.pop();

  return {
    lastPost,
    error,
    loading,
  };
};

export default useFetchLastPost;
