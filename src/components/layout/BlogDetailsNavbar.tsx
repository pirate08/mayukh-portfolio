"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

const BlogDetailsNavbar = ({ time }: { time: string }) => {
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
          href="/blog"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 text-sm"
          aria-label="Go back to blog page"
        >
          <FaArrowLeft />
          <span className="hidden sm:inline">All Articles</span>
        </Link>

        {/* --Count of Total Blogs-- */}
        <div>
          <span className="text-xs text-gray-600">
            <h6 className="flex items-center gap-1">
              <FaRegClock className="text-xs" /> {time}
            </h6>
          </span>
        </div>
      </div>
    </header>
  );
};

export default BlogDetailsNavbar;
