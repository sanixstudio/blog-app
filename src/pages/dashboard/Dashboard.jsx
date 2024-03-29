import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/userContext";
import Layout from "../../layout/layout";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { DashBoardTable, ConfirmModal } from "../../components";
import { FaArrowLeft } from "react-icons/fa";
import { LoadingSpinner } from "../../components";
import { BASE_ROUTE } from "../../constants";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 10;

  useEffect(() => {
    if (user.user) {
      fetchPosts();
    }
  }, [user.user]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_ROUTE}/api/posts/user-posts/${user?.user?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <h1 className="text-4xl">Error: {error.message}</h1>;
  if (loading) return <LoadingSpinner />;

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.reverse().slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const handleDelete = async () => {
    closeModal();

    try {
      const url = `${BASE_ROUTE}/api/posts/${postId}`;
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(user.user)

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-[1400px] mx-auto my-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-3"
        >
          <span>
            <FaArrowLeft />
          </span>
          Back
        </button>
        <h1 className="text-3xl font-bold mb-8 capitalize">{user?.user.name} posts</h1>
        {/* Section: List of Posts */}
        <div className="mb-8">
          <DashBoardTable currentPosts={currentPosts} openModal={openModal} />
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(posts.length / postsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            className="max-w-screen-xl mx-auto flex py-4 mt-10 gap-6 justify-center bg-gray-100"
          />
        </div>
      </div>
      <ConfirmModal
        show={showModal}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </Layout>
  );
};

export default Dashboard;
