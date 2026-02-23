import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center gap-5 justify-start py-24 bg-hero px-4 text-center">
      {/* --Small Text-- */}
      <h6 className="font-mono text-green-600 text-base">Hello, I'm</h6>

      {/* --Name Section-- */}
      <h1 className="font-heading font-bold text-slate-900 text-5xl md:text-[80px] leading-tight">
        Mayukh Deb Goswami
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
        {/* --View My Work button-- */}
        <Link
          href="/projects"
          className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all duration-200"
        >
          View My Work
        </Link>

        {/* --Contact Me button-- */}
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-2.5 rounded-lg border-[0.5px] border-black font-medium text-sm hover:bg-green-100 transition-all duration-200"
        >
          Contact Me
        </Link>
      </div>

      {/* --Social media links-- */}
      <div className="flex items-center gap-4 mt-6">
        {/* --Github icon goes here-- */}
        <Link
          href="https://github.com/pirate08/"
          className="bg-gray-200 rounded-full p-3 hover:bg-primary text-2xl text-gray-700 transition-all duration-300"
        >
          <FaGithub />
        </Link>
        {/* --Linkedin icon goes here-- */}
        <Link
          href="https://www.linkedin.com/in/mayukh-deb-goswami-343563358/"
          className="bg-gray-200 rounded-full p-3 hover:bg-primary text-2xl text-gray-700 transition-all duration-300"
        >
          <FaLinkedin />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
