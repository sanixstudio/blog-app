export const handleDelete = async (postId, pageToNavigate) => {
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
      toast.success("Post deleted successfully");
      setTimeout(() => navigate(pageToNavigate), 1000);
    } else {
      console.error("Delete request failed with status:", response.status);
    }
  } catch (error) {
    console.error("An error occurred while deleting the post:", error);
  }
};
