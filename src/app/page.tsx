import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* --Hero Section goes here-- */}
      <Hero />
      {/* --About Section goes here-- */}
      <About />
    </div>
  );
}
