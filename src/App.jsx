import React from "react";
import { Navbar } from "./components";
import Posts from "./pages/posts/Posts";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-3xl text-red-500">
        <Navbar />
      </div>
      <Posts />
    </div>
  );
}

export default App;
