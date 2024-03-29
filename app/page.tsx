"use client";
import Header from "@/components/landing-page/header";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import ValuePropositions from "@/components/landing-page/value-propositions";
import Footer from "@/components/landing-page/footer";
import Benefits from "@/components/landing-page/benefits";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LineBreak from "@/components/global/line-break";


export default function Home() {
  

  return (
    <main className="min-h-full">
      {/* bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800 to-black */}
      <title>GenAIConnect - Coming Soon</title>
      <Header/>
      <LineBreak/>

      <center>
        <Button
          variant="secondary"
          className="my-8 px-6 py-5 text-yellow-500 rounded-[20px]"
        >
          Coming Soon
        </Button>
        <small className="pt-1">REcent completed Task: Added Contact form</small>
      </center>

      <Hero/>
     <Features/>
      <ValuePropositions/>
      {/* <Benefits/> */}
      <Footer/>

      {/* Typeform Section */}
      {/* <section id="typeform">
        Embed your Typeform here
        Welcome message and contact information fields as per Typeform suggestions
        Software details, expectations, and submit button as per Typeform suggestions
      </section> */}
    </main>
  );
}
