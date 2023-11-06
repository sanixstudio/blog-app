import React, { useContext } from "react";
import Posts from "./pages/posts/Posts";
import Layout from "./layout/layout";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Layout>
        <Posts />
      </Layout>
    </div>
  );
}

export default App;
