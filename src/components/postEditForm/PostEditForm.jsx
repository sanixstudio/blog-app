import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FORMATS, MODULES } from "../../constants";

const EditPostForm = ({ post, onSubmit, loading }) => {
  const [editedPost, setEditedPost] = useState({
    title: post.title,
    body: post.body,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({
      ...editedPost,
      [name]: value,
    });
  };

  const handleQuillChange = (value) => {
    setEditedPost({
      ...editedPost,
      body: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedPost); // Pass the edited post data to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={editedPost.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb pb-12">
        <label htmlFor="body" className="block text-sm font-medium">
          Body:
        </label>
        <ReactQuill
          // modules={MODULES}
          // formats={FORMATS}
          theme="snow"
          value={editedPost.body}
          onChange={handleQuillChange}
          className="bg-white"
          placeholder="Enter you post details"
        />
      </div>
      <div className="flex gap-4 justify-end mt-8">
        <button
          type="submit"
          className="bg-gray-400 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Cancel
        </button>
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditPostForm;
