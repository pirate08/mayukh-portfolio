"use client";

import React, { useState, useEffect } from "react";
import { NavItem } from "@/types/nav";
import Link from "next/link";

const navItems: NavItem[] = [
  { id: 1, label: "About", href: "/about" },
  { id: 2, label: "Projects", href: "/projects" },
  { id: 3, label: "Skills", href: "/skills" },
  { id: 4, label: "Blog", href: "/blog" },
  { id: 5, label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-purple-50  backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="w-4/5 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight">Portfolio</h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex gap-8 items-center">
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className="text-sm text-gray-500 hover:text-black border-b-2 border-transparent hover:border-green-700 transition-colors duration-300 pb-0.5"
              >
                <Link href={nav.href}>{nav.label}</Link>
              </li>
            ))}
          </ul>

          <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors duration-200">
            <Link href="/get-in-touch">Get In Touch</Link>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 bg-white/95 backdrop-blur-md py-6 shadow-md">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <Link
                href={nav.href}
                className="text-gray-600 hover:text-black text-sm font-medium transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {nav.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="bg-green-700 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-green-800 transition-colors duration-200 mt-1">
              <Link href="/get-in-touch" onClick={() => setMenuOpen(false)}>
                Get In Touch
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
