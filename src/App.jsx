import React from "react";
import Posts from "./pages/posts/Posts";
import Layout from "./layout/layout";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/userContext";

function App() {
  const { userInfo } = React.useContext(UserContext);
  console.log(userInfo);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Layout>
        <Posts />
      </Layout>
    </div>
  );
}

export default App;
