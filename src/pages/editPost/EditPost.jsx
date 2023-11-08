import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../layout/layout";
import { useAuth } from "../../context/userContext";
import { PostEditForm } from "../../components";

const EditPost = () => {
  const { user } = useAuth();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (!user.user) navigate("/");

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

  const handleUpdate = async (editedPostData) => {
    try {
      const url = `http://localhost:4000/api/posts/${postId}`;
      const response = await fetch(url, {
        method: "PUT", // Use the appropriate HTTP method for updating
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(editedPostData),
      });

      if (response.ok) {
        // Post updated successfully
        // You can redirect the user to the single post page or another route
        navigate(`/post/${postId}`);
      } else {
        console.error("Update request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while updating the post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-8">
        <h1 className="text-3xl font-bold mb-2">Edit Post</h1>
        <PostEditForm loading={loading} post={post} onSubmit={handleUpdate} />
      </div>
    </Layout>
  );
};

export default EditPost;
