"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectsPageNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-md"
          : "bg-secondary border-b border-gray-200"
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 text-sm"
          aria-label="Go back to homepage"
        >
          <FaArrowLeft />
          <span className="hidden sm:inline">Back to home</span>
        </Link>

        {/* Center Title (Not H1 to avoid duplicate H1 issue) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-base sm:text-lg md:text-xl font-semibold text-slate-900">
            Projects
          </span>
        </div>
      </div>
    </header>
  );
};

export default ProjectsPageNavbar;
