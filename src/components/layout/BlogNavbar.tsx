"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const BlogNavbar = () => {
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
      <div className=" px-4 md:px-20 py-4 flex items-center justify-between">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 text-sm"
          aria-label="Go back to homepage"
        >
          <FaArrowLeft />
          <span className="hidden sm:inline">Home</span>
        </Link>

        {/* --Count of Total Blogs-- */}
        <div>
          <span className="text-sm text-gray-600">
            <h6 className="tracking-widest">4 articles</h6>
          </span>
        </div>
      </div>
    </header>
  );
};

export default BlogNavbar;
