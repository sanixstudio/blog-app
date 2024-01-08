import React from "react";
import Layout from "./layout/layout";
import Landing from "./pages/landing/Landing";
import { BASE_ROUTE } from "./constants";

console.log(BASE_ROUTE);

function App() {
  return (
    <div className="bg-[#8383830a]">
      <Layout>
        <Landing />
      </Layout>
    </div>
  );
}

export default App;
