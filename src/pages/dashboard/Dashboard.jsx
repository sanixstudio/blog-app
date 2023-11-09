import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/userContext";
import Layout from "../../layout/layout";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import ReactPaginate from "react-paginate";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 10;

  useEffect(() => {
    if (user.user) {
      const delay = 1000; // Time delay in milliseconds (1 second)

      // Use setTimeout to call fetchPosts after the delay
      const timerId = setTimeout(() => {
        fetchPosts();
        console.log(posts);
      }, delay);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timerId);
    }
  }, [user.user]);

  const fetchPosts = async () => {
    console.log("user inside fetch", user);

    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:4000/api/posts/user-posts/${user?.user?.id}`,
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

  if (error) return <h1 className="text-4xl">Error: {error.message}</h1>; // Display the error message
  if (loading) return <h1 className="text-4xl">Loading...</h1>;

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.reverse().slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-[1200px] mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        {/* Section: List of Posts */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">My Posts</h2>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Body</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 font-semibold truncate">
                    {post.title}
                  </td>
                  <td className="py-2 flex-1 line-clamp-1 px-4 leading-10">
                    {post.body}
                  </td>
                  <td className="py-2 px-4">
                    {new Date(post.timestamp).toLocaleDateString()}
                  </td>
                  <td className="flex py-2 px-4">
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded-lg mr-2"
                    >
                      <AiOutlineEdit />
                    </a>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded-lg">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </Layout>
  );
};

export default Dashboard;
