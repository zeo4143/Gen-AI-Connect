// UI - done
// Next Task - Animation, positioning

import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-effect";

function Hero() {
  
  return (
    <section id="hero" className="h-[100vh] p-4 text-center">
      <div className=" m-20 h-full flex flex-col justify-center">
        {/* <center className="mb-12">
          <Button
            variant="secondary"
            className="my-8 px-6 py-5 text-yellow-500 rounded-[20px]"
          >
            Coming Soon
          </Button>
          <p className="text-xs">
            Recent completed Task: Added Animation to hero & TODO - Implentation
            of grid on feature cards
          </p>
        </center> */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold flex justify-center items-center flex-wrap gap-2">
          <TextGenerateEffect
            words="Revolutionize Your"
            className="text-inherit"
          />

          <motion.span
            initial={{ opacity: 0, scale: 1.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.25, duration: 0.75 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r  from-indigo-300 via-purple-300 to-rgb-185-168-22 bg-clip-text"
          >
            Software
          </motion.span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
          className="text-xs sm:text-xl md:text-2xl font-medium opacity-50"
        >
          {" "}
          with
        </motion.span>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="mt-8 mb-4 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300 bg-clip-text"
        >
          GenAIConnect
        </motion.p>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 4.5, duration: 0.5 }}
        className="text-xs md:text-3xl font-medium opacity-50"
      >
        Power Your Software with Generative AI Capabilities{" "}
        <br className="hidden md:block" /> within Hours{" "}
      </motion.p>

      <motion.div
        initial={{ y: 200, opacity:0 }}
        animate={{ y: 0, opacity:1 }}
        transition={{ delay: 5, duration: 0.5 }}
      >
        <Button
          size="lg"
          className=" my-4 md:my-8 md:px-10 md:py-9 text-xs md:text-2xl font-semibold rounded-[50px] text-[#5026AE] bg-[rgb(185,168,223)] hover:bg-[rgb(185,168,223,0.5)] hover:text-black"
        >
          <span>Get Early Access</span>
          <ArrowRightIcon className=" mt-0.5 ml-1 md:w-8 md:h-8" />
        </Button>
      </motion.div>
      </div>

      
    </section>
  );
}

export default Hero;
