import React from "react";
import useFetchLastPost from "../../hooks/useFetchLastPost";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import MDEditor from "@uiw/react-md-editor";

const LandingHero = () => {
  const { loading, error, lastPost } = useFetchLastPost();

  if (loading) return <LoadingSpinner />;

  if (error) console.log(error);

  return (
    <div className="flex flex-col lg:flex-row items-center space-x-8 mt-8 md:mt-8 px-8 border-b pb-10">
      <div className="flex-1  flex justify-center lg:justify-end">
        <img
          src={lastPost?.image.url}
          alt="hero image"
          className="max-h-[400px] object-cover w-full rounded-xl"
        />
      </div>
      <div className="flex-1  order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-4xl md:5xl lg:text-6xl">{lastPost?.title}</h1>
        <MDEditor.Markdown
          source={lastPost?.body}
          components={<button>Submit</button>}
          style={{
            padding: "2em",
            background: "transparent",
          }}
          className="line-clamp-4"
        />
      </div>
    </div>
  );
};

export default LandingHero;
