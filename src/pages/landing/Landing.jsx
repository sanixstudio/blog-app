import React from "react";
import Posts from "../posts/Posts";
import { LandingHero } from "../../components";

const Landing = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <LandingHero />
      <Posts />
    </div>
  );
};

export default Landing;
