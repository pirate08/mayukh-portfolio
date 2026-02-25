import React from "react";
import BlogCard from "../ui/BlogCard";
import { BlogPost } from "@/types/blog";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const blogPost: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development with Next.js 15",
    description:
      "In this comprehensive guide, we explore the latest features of Next.js 15, focusing on the new React Compiler and how it drastically reduces the need for manual memoization. ",
    tag: "Web Development",
    date: "2024-05-12",
    slugUrl: "/future-of-nextjs",
    time: "8 min read",
  },
  {
    id: 2,
    title: "Mastering Clean Code in Large Scale Systems",
    description:
      "Software architecture isn't just about making things work; it's about making things last. This article breaks down the principles of SOLID design and how to apply them within a TypeScript ecosystem.",
    tag: "Software Architecture",
    date: "2024-06-01",
    slugUrl: "/mastering-clean-code",
    time: "12 min read",
  },
  {
    id: 3,
    title: "Lessons Learned from 100+ Open Source Contributions",
    description:
      "Contributing to open source is one of the fastest ways to grow as a developer, but it can be intimidating at first. I'm sharing my personal journey of navigating large codebases, communicating with maintainers, and handling merge conflicts in high-pressure environments. We'll look at the etiquette of opening Pull Requests, the importance of detailed documentation, and how to find the right projects that match your current skill level. Whether you are a beginner or a senior dev, there is something in the world of OSS for everyone.",
    tag: "Lessons Learned",
    date: "2024-06-15",
    slugUrl: "/lessons-from-oss",
    time: "10 min read",
  },
  {
    id: 4,
    title: "Building Real-Time Apps with Socket.io and Hono",
    description:
      "Real-time communication is becoming a standard requirement for modern web apps. In this tutorial, we build a high-performance chat application using Hono as our backend framework and Socket.io for the WebSocket layer. We explore how to handle horizontal scaling, manage room-based namespaces, and ensure that your server stays responsive under heavy load. We also touch upon the security aspects of WebSockets, including JWT authentication and rate limiting to prevent common attacks like DDOS. It's a deep dive into the world of persistent connections.",
    tag: "Web Development",
    date: "2024-07-20",
    slugUrl: "/real-time-apps",
    time: "15 min read",
  },
];

const Blog = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPost.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* --View more button goes here-- */}
        <div className="text-center mt-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-primary text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
          >
            View all articles
            <FiArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
