// import { useEffect, useState } from "react";
// import { useAuth } from "../context/userContext";

// const useFetchAuthorPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { user } = useAuth();

//   const fetchPosts = async () => {
//     try {
//       console.log(user);
//       setLoading(true);
//       const res = await fetch(
//         `http://localhost:4000/api/posts/user-posts/${user?.user?.id}`,
//         {
//           method: "GET",
//           authorization: user?.token,
//         }
//       );
//       const data = await res.json();
//       setPosts(data);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return {
//     posts,
//     error,
//     loading,
//   };
// };

// export default useFetchAuthorPosts;
