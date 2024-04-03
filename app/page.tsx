"use client";
import Header from "@/components/landing-page/header";

import { Button } from "@/components/ui/button";
import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import ValuePropositions from "@/components/landing-page/value-propositions";
import Footer from "@/components/landing-page/footer";
import Benefits from "@/components/landing-page/benefits";
import Contact from "@/components/landing-page/contact";

export default function Home() {
  return (
    <main className="min-h-full">
      <title>GenAIConnect - Coming Soon</title>  
      <Hero />
      <Features />
      <ValuePropositions />
      <Contact />
    </main>
  );
}
