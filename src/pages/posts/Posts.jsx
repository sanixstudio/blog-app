import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return <h1 className="text-4xl">Error</h1>;
  if (loading) return <h1 className="text-4xl">Loading...</h1>;

  return posts.reverse().map((post) => (
    <div
      key={post._id}
      className="flex flex-col items-center md:justify-between text-center md:text-left md:flex-row gap-5 mx-auto my-0 max-w-screen-xl mt-20 px-4"
    >
      {/* <img width={400} src={post.image} alt="cutie" /> */}
      <div className="self-start">
        <a href={`/posts/${post._id}`}>
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </a>
        <span className="font-bold inline-block mr-2 my-4 text-gray-600">
          {post?.author?.username || "Anonymous"}
        </span>
        <span className="font-bold text-gray-400">
          {new Date(post.timestamp).toLocaleDateString()}
        </span>
        <p>{post.body}</p>
      </div>
    </div>
  ));
};

export default Posts;
