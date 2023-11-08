import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../layout/layout";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useAuth } from "../../context/userContext";
import { DeleteConfirmModal } from "../../components";
import toast, { Toaster } from "react-hot-toast";

const SinglePost = () => {
  const { user } = useAuth();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    closeModal();

    try {
      const url = `http://localhost:4000/api/posts/${postId}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        toast.success("Post created successfuly, redirecting...");
        setTimeout(() => navigate("/"), 1000);
      } else {
        console.error("Delete request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while deleting the post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  const loggedUserId = user?.user?.id;
  const postAuthorId = post?.author?._id;
  const isValidAuthor = loggedUserId === postAuthorId;

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-8">
        {user.token && isValidAuthor && (
          <div className="flex justify-end mb-2 gap-4">
            <a href={`/post/edit/${post._id}`}>
              <AiOutlineEdit size={24} color="green" />
            </a>
            <button onClick={openModal}>
              <AiOutlineDelete size={24} color="red" />
            </button>
          </div>
        )}
        <img src={"https://picsum.photos/id/237/800/500"} alt="cutie" />
        <h1 className="text-3xl font-bold my-4 mt-8">{post.title}</h1>
        <div className="text-gray-700 mb-4">
          <span className="font-semibold">By:</span>{" "}
          {post?.author?.username || "Anonymous"}
        </div>
        <div className="text-gray-600 text-sm mb-4">
          Posted on {new Date(post.timestamp).toLocaleDateString()}
        </div>
        <p className="text-gray-800 leading-relaxed">{post.body}</p>
      </div>
      <DeleteConfirmModal
        show={showModal}
        onClose={closeModal}
        onDelete={handleDelete}
      />
      <Toaster />
    </Layout>
  );
};

export default SinglePost;
