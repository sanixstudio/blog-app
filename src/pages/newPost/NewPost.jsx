import React, { useState } from "react";
import { useAuth } from "../../context/userContext";
import Layout from "../../layout/layout";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const { user } = useAuth();
  console.log(user);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      setError("All fields are required");
      return;
    }

    setError("");

    const newPost = {
      title,
      body,
      userId: user?.user.id,
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: user.token,
        },
        body: JSON.stringify(newPost),
      });

      if (res.ok) {
        // Reset the form fields
        setTitle("");
        setBody("");
        navigate("/");
      } else {
        throw new Error("Failed to create a new post.");
      }
    } catch (error) {
      setError("An error occurred while creating the post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex w-full min-h-screen justify-center items-center -mt-20">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md md:w-[500px]">
          <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="body" className="block text-sm font-medium">
                Body:
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full p-2 border rounded-lg h-[100px]"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewPost;
