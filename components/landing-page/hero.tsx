// UI - done
// Next Task - Animation, positioning

import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function Hero() {
  return (
    <section id="hero" className="min-h-[50vh] p-4 text-center">
      <div className="mt-4 p-4">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">
          Revolutionize Your{" "}
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r  from-indigo-300 via-purple-300 to-rgb-185-168-22 bg-clip-text">
            {" "}
            Software
          </span>
        </p>
        <span className="text-xs sm:text-xl md:text-2xl font-medium opacity-50">
          {" "}
          with
        </span>
        <p className="mt-8 mb-4  text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300 bg-clip-text">
          GenAIConnect
        </p>
      </div>

      <div className="md:p-2 text-xs md:text-3xl font-medium opacity-50 flex md:block flex-wrap justify-center">
        <p>Power Your Software with Generative AI Capabilities</p>
        <p>within Hours </p>
      </div>

      <Button
        size="lg"
        className=" my-4 md:my-8 md:px-10 md:py-9 text-xs md:text-2xl font-semibold rounded-[50px] text-[#5026AE] bg-[rgb(185,168,223)] hover:bg-[rgb(185,168,223,0.5)] hover:text-black"
      >
        <span>Get Early Access</span>
        <ArrowRightIcon className=" mt-0.5 ml-1 md:w-8 md:h-8" />
      </Button>
    </section>
  );
}

export default Hero;
