import React, { useState } from "react";
import { Post } from "../../components";
import useFetchPosts from "../../hooks/useFetchPosts";
import ReactPaginate from "react-paginate";

const Posts = () => {
  const { posts, error, loading } = useFetchPosts();
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;

  if (error) return <h1 className="text-4xl">Error</h1>;
  if (loading) return <h1 className="text-4xl">Loading...</h1>;

  // Calculate the current page of posts to display
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.reverse().slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      {currentPosts.map((post) => (
        <Post key={post._id} post={post} />
      ))}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(posts.length / postsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className=" max-w-screen-xl mx-auto flex py-4 my-10 gap-6 justify-center bg-gray-100"
      />
    </div>
  );
};

export default Posts;
