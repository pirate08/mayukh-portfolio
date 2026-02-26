import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        {/* Left: Copyright */}
        <p>
          © {new Date().getFullYear()} Mayukh Deb Goswami. All rights reserved.
        </p>

        {/* Right: Built with */}
        <p className="flex items-center gap-1.5">
          Built with <FaHeart className="text-primary text-xs" /> using Next.js
          & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
