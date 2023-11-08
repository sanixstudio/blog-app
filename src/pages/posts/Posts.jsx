import React, { useEffect, useState } from "react";
import { Post } from "../../components";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return <h1 className="text-4xl">Error</h1>;
  if (loading) return <h1 className="text-4xl">Loading...</h1>;

  return posts.reverse().map((post) => <Post key={post._id} post={post} />);
};

export default Posts;
