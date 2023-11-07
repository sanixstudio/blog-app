import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../layout/layout";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { pathname } = useLocation();

  const postId = pathname.split("/").pop();

  const fetchPost = async () => {
    console.log(`localhost:4000/api/posts/${postId}`);
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:4000/api/posts/${postId}`);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      setError(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(post);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-gray-700 mb-4">
          <span className="font-semibold">By:</span>{" "}
          {post?.author?.username || "Anonymous"}
        </div>
        <div className="text-gray-600 text-sm mb-4">
          Posted on {new Date(post.timestamp).toLocaleDateString()}
        </div>
        <p className="text-gray-800 leading-relaxed">{post.body}</p>
      </div>
    </Layout>
  );
};

export default SinglePost;
