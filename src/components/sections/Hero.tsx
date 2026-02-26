"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaPalette } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";

const fullName = "Mayukh Deb Goswami";

const Hero = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charIndex < fullName.length) {
        timeout = setTimeout(() => {
          setDisplayedName((prev) => prev + fullName[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 5000);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    } else if (phase === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedName((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 45);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase]);

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center gap-5 justify-start py-24 bg-hero px-4 text-center overflow-hidden">
      {/* --Bottom Left Icon-- */}
      <div className="absolute bottom-16 left-6 md:left-12 text-primary opacity-60 animate-bounce">
        <BsRocketTakeoffFill className="text-3xl md:text-6xl" />
      </div>

      {/* --Middle Right Icon-- */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 text-primary opacity-60 animate-bounce [animation-delay:300ms]">
        <FaPalette className="text-3xl md:text-5xl" />
      </div>

      {/* --Small Text-- */}
      <h6 className="font-mono text-green-600 text-base">Hello, I'm</h6>

      {/* --Name Section with Typewriter-- */}
      <h1 className="font-heading font-bold text-slate-900 text-5xl md:text-[80px] leading-tight">
        {displayedName}
        <span className="inline-block w-0.75 md:w-1 h-[0.85em] bg-primary ml-1 align-middle animate-pulse" />
      </h1>

      {/* --Designation-- */}
      <h2 className="text-2xl md:text-[36px] text-gray-400 font-semibold">
        Full Stack Developer
      </h2>

      {/* --Paragraph-- */}
      <p className="font-sans text-gray-500 text-lg md:text-[20px] max-w-2xl">
        I build exceptional digital experiences with modern technologies.
        Passionate about clean code, intuitive design, and solving complex
        problems.
      </p>

      {/* --Buttons-- */}
      <div className="flex items-center gap-4 mt-6">
        <Link
          href="/projects"
          className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all duration-200"
        >
          View My Work
        </Link>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-white text-black px-6 py-2.5 rounded-lg border-[0.5px] border-black font-medium text-sm hover:bg-green-100 transition-all duration-200 cursor-pointer"
        >
          Contact Me
        </button>
      </div>

      {/* --Social media links-- */}
      <div className="flex items-center gap-4 mt-6">
        <Link
          href="https://github.com/pirate08/"
          className="bg-gray-200 rounded-full p-3 hover:bg-primary hover:text-white text-2xl text-gray-700 transition-all duration-300"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mayukh-deb-goswami-343563358/"
          className="bg-gray-200 rounded-full p-3 hover:bg-primary hover:text-white text-2xl text-gray-700 transition-all duration-300"
        >
          <FaLinkedin />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
