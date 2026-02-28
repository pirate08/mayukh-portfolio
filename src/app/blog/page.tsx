import React from "react";
import type { Metadata } from "next";
import BlogNavbar from "@/components/layout/BlogNavbar";

export const metadata: Metadata = {
  title: "Blog | Mayukh Portfolio",
  description:
    "Explore blog posts about web development, programming, and technology.",
};

const BlogPageUI = () => {
  return (
    <main className="min-h-screen bg-secondary py-10">
      {/* Navbar */}
      <BlogNavbar />

      {/* Page Content */}
      <section className="pt-24 md:pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* --Header Section goes here-- */}
          <div>
            <span className="font-mono text-primary text-base mb-2">
              / blog
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-slate-900 mt-2">
              Articles & Insights
            </h1>

            <p className="mt-4 text-gray-500 text-[18px] max-w-2xl ">
              Writing about web development, software architecture, and lessons
              learned from building real-world applications.
            </p>
          </div>
          {/* --Blog's card goes here-- */}
          {/* <div>
            <ProjectsPage />
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default BlogPageUI;
