import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* --Navbar goes here-- */}
      <Navbar />
      {/* --Hero Section goes here-- */}
      <Hero />
      {/* --About Section goes here-- */}
      <About />
      {/* --Projects Section goes here-- */}
      <Projects />
      {/* --Footer goes here-- */}
      <Footer />
    </div>
  );
}
