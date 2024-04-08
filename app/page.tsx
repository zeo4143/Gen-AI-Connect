"use client";
import Header from "@/components/landing-page/header/header";

import { Button } from "@/components/ui/button";
import Hero from "@/components/landing-page/main/hero";
import Features from "@/components/landing-page/main/features";
import ValuePropositions from "@/components/landing-page/main/value-propositions";
import Footer from "@/components/landing-page/footer/footer";
import Benefits from "@/components/landing-page/main/benefits";
import Contact from "@/components/landing-page/main/contact";

export default function Home() {
  return (
    <>
      <title>GenAIConnect - Coming Soon</title>  
      <Hero />
      <Features />
      <ValuePropositions />
      <Contact />
    </>
  );
}
