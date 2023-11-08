import React from "react";
import { useAuth } from "../../context/userContext";
import Layout from "../../layout/layout";
import useFetchPosts from "../../hooks/useFetchPosts";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const Dashboard = () => {
  const { user } = useAuth();
  const { posts, error, loading } = useFetchPosts();

  if (error) return <h1 className="text-4xl">Error: {error}</h1>;
  if (loading) return <h1 className="text-4xl">Loading...</h1>;

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
              {posts.map((post) => (
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
        </div>

        {/* Section: Create a New Post */}
        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Create New Post</h2>
          <Link
            to="/create-post"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            Create Post
          </Link>
        </div> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
