import React from "react";
import type { Metadata } from "next";
import BlogNavbar from "@/components/layout/BlogNavbar";
import BlogPage from "@/components/pages/BlogPage";
import { BlogPost } from "@/types/blog";
import { getAllBlogs } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Blog | Mayukh Portfolio",
  description:
    "Explore blog posts about web development, programming, and technology.",
};

const BlogPageUI = async () => {
  const blogPosts = await getAllBlogs();

  // --Total number of Blogs--
  const totalNumber = blogPosts.length.toString();

  return (
    <main className="min-h-screen bg-secondary py-10">
      {/* Navbar stays visible even if blogs are empty */}
      <BlogNavbar articles={totalNumber} />

      {/* Page Content */}
      <section className="pt-24 md:pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* --Header Section-- */}
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

          {/* --Blog's card OR Empty State-- */}
          <div className="mt-12">
            {blogPosts.length === 0 ? (
              // This is your custom function logic integrated here
              <div className="mt-16 text-center py-20 border-2 border-dashed border-gray-200 rounded-xl">
                <p className="font-mono text-primary text-lg">
                  No blogs found.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Check back soon — blogs are being added!
                </p>
              </div>
            ) : (
              <BlogPage blogPosts={blogPosts} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPageUI;
