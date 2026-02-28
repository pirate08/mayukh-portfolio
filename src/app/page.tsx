import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";

import Hero from "@/components/sections/Hero";

import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
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
      {/* --Skills Section goes here-- */}
      <Skills />
      {/* --Skills Section goes here-- */}
      <Blog />

      {/* --Footer goes here-- */}
      <Footer />
    </div>
  );
}
