import React from "react";
import Posts from "./pages/posts/Posts";
import Layout from "./layout/layout";
import { useNavigate } from "react-router-dom";

function App() {
  const Navigate = useNavigate();
  const isLoggedIn = true;

  !isLoggedIn ? (
    Navigate("/login")
  ) : (
    <Layout>
      <Posts />
    </Layout>
  );
}

export default App;
