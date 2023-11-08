import React, { useState } from "react";

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
      <div className="mb-4">
        <label htmlFor="body" className="block text-sm font-medium">
          Body:
        </label>
        <textarea
          id="body"
          name="body"
          value={editedPost.body}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg h-[100px]"
          required
        />
      </div>
      <div className="flex gap-4 justify-end">
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
