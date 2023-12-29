import React, { useState } from "react";
import { useAuth } from "../../context/userContext";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../../layout/layout";
import { useNavigate } from "react-router-dom";
import { MarkDownEditor } from "../../components";

const NewPost = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null); // State to store the selected image file
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      setError("Both title and body fields are required.");
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("userId", user?.user.id);
    if (image) {
      formData.append("image", image); // Add the image to the FormData
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/posts", {
        method: "POST",
        headers: {
          authorization: user.token,
        },
        body: formData,
      });

      if (res.ok) {
        // Reset the form fields
        setTitle("");
        setBody("");
        setImage(null); // Clear the selected image
        toast.success("Post created successfully, redirecting...");
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error("Failed to create a new post.");
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
        <div className="bg-gray-100 p-4 rounded-lg shadow-md md:w-[900px]">
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
            </div>
            <MarkDownEditor value={body} setValue={setBody} />
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium">
                Image:
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="my-4 mt-10"></div>
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </Layout>
  );
};

export default NewPost;
