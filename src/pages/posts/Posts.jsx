import React, { useState } from "react";
import { Card } from "../../components";
import useFetchPosts from "../../hooks/useFetchPosts";
import ReactPaginate from "react-paginate";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const Posts = () => {
  const { posts, error, loading } = useFetchPosts();
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 9;

  if (error) return <h1 className="text-4xl">Error</h1>;
  if (loading) return <LoadingSpinner />;

  // Calculate the current page of posts to display
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.reverse().slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="flex flex-col h- max-w-[1440px] mx-auto">
      <div className="flex-1 my-10 mx-8 gap-8">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {currentPosts.map((post) => (
            <Card key={post._id} post={post} />
          ))}
        </div>
      </div>
      {/* Pagination */}
      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        pageCount={Math.ceil(posts.length / postsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="max-w-screen-xl mx-auto flex py-4 gap-8 justify-center bg-gray-200 px-8 rounded-full"
      />
    </div>
  );
};

export default Posts;
