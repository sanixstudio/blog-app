import React from "react";
import Posts from "../posts/Posts";
import { LandingHero } from "../../components";

const Landing = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <LandingHero />
      <div className="flex justify-center py-10 flex-col md:flex-row gap-4">
        <span className="font-bold italic text-gray-500">Popular Tags:</span>
        <div className="flex justify-center md:justify-start gap-2">
          <button className="bg-primary/10 px-4 py-1 rounded-md text-sm text-primary font-bold">
            Design
          </button>
          <button className="bg-primary/10 px-4 py-1 rounded-md text-sm text-primary font-bold">
            UX
          </button>
          <button className="bg-primary/10 px-4 py-1 rounded-md text-sm text-primary font-bold">
            Frontend
          </button>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Landing;
