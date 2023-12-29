import React from "react";
import Layout from "./layout/layout";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="bg-[#F9FCFF]">
      <Layout>
        <Landing />
      </Layout>
    </div>
  );
}

export default App;
