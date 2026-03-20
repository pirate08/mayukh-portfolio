import React from "react";
import BlogCard from "../ui/BlogCard";
import { BlogPost } from "@/types/blog";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { getLatestBlogs } from "@/lib/strapi";

const Blog = async () => {
  const blogPosts = await getLatestBlogs(4);
  return (
    <section
      id="blog"
      className="bg-secondary/30 py-24 px-4"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h6 className="font-mono text-primary text-base mb-2">Blog</h6>
          <h2
            id="blog-heading"
            className="text-3xl md:text-[36px] font-bold text-slate-900"
          >
            Latest Articles
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-[20px] mt-5 max-w-2xl mx-auto">
            I write about web development, software architecture, and lessons
            learned from building real-world applications.
          </p>
        </div>
        {/* --Blog Card goes here-- */}
        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-mono text-primary text-lg">No blogs yet.</p>
            <p className="text-gray-600 text-sm mt-2">Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {/* --View more button goes here-- */}
        {blogPosts.length >= 1 && (
          <div className="text-center mt-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-primary text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
            >
              View all articles
              <FiArrowRight className="text-base" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
