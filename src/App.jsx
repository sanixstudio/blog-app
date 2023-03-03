import React from "react";
import { Navbar } from "./components";
import Posts from "./pages/posts/Posts";
import Layout from "./layout/layout";

function App() {
  const isLoggedIn = true;
  return (
    <div className="bg-gray-50 min-h-screen">
      <Layout>
        <Posts />
      </Layout>
    </div>
  );
}

export default App;
