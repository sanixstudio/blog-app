import React from "react";
import { Button } from "@radix-ui/themes";

import heroImg from "../../assets/images/live_chat.png";

const LandingHero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center space-x-4 mt-8 md:mt-8 px-8">
      <div className="flex-1  order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-4xl md:5xl lg:text-6xl">
          Read the most interesting articles
        </h1>
        <p className=" my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <form className="flex shadow-xl shadow-black/5 mb-8">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Article"
            className="p-4 w-full rounded-md"
          />
          <div className="-ml-28 my-2">
            <Button variant="solid">
              <span className="w-[96px] h-[40px] flex justify-center items-center font-semibold text-white rounded-md bg-primary">
                Submit
              </span>
            </Button>
          </div>
        </form>
        <div className="flex flex-col md:flex-row gap-4">
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
      </div>
      <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
        <img src={heroImg} alt="hero image" />
      </div>
    </div>
  );
};

export default LandingHero;
