import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../layout/layout";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useAuth } from "../../context/userContext";

const SinglePost = () => {
  const { user } = useAuth();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { pathname } = useLocation();

  const postId = pathname.split("/").pop();

  const fetchPost = async () => {
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

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  const loggedUserId = user?.user?.id;
  const postAutorId = post?.author?._id;
  const isValidAuthor = loggedUserId === postAutorId;

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-8">
        {user.token && isValidAuthor && (
          <div className="flex justify-end mb-2 gap-4">
            <a href="#">
              <AiOutlineEdit size={24} color="green" />
            </a>
            <a href="#">
              <AiOutlineDelete size={24} color="red" />
            </a>
          </div>
        )}
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
