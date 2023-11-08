import React from "react";

const DeleteConfirmModal = ({ show, onClose, onDelete }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="mb-4">Are you sure you want to delete this post?</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
