import React from "react";
import type { Metadata } from "next";
import BlogNavbar from "@/components/layout/BlogNavbar";
import BlogPage from "@/components/pages/BlogPage";
import { BlogPost } from "@/types/blog";

export const metadata: Metadata = {
  title: "Blog | Mayukh Portfolio",
  description:
    "Explore blog posts about web development, programming, and technology.",
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development with Next.js 15",
    content: "Full blog content would go here...",
    description:
      "In this comprehensive guide, we explore the latest features of Next.js 15, focusing on the new React Compiler and how it drastically reduces the need for manual memoization. We dive into Server Actions, partial prerendering, and why the transition to asynchronous request APIs is a game changer for performance. We also look at how the upgraded Turbopack helps speed up local development cycles for large-scale applications.",
    tag: "Web Development",
    date: "2024-05-12",
    slugUrl: "future-of-nextjs",
    time: "8 min read",
    isFeatured: true,
  },

  {
    id: 2,
    title: "Mastering Clean Code in Large Scale Systems",
    content: "Full blog content would go here...",
    description:
      "Software architecture isn't just about making things work; it's about making things last. This article breaks down the principles of SOLID design and how to apply them within a TypeScript ecosystem. We discuss why 'DRY' (Don't Repeat Yourself) can sometimes be a trap and when you should favor composition over inheritance. Learn how to structure your folders to handle hundreds of components without losing your sanity.",
    tag: "Architecture",
    date: "2024-06-01",
    slugUrl: "mastering-clean-code",
    time: "12 min read",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Lessons Learned from 100+ Open Source Contributions",
    content: "Full blog content would go here...",
    description:
      "Contributing to open source is one of the fastest ways to grow as a developer, but it can be intimidating at first. I'm sharing my personal journey of navigating large codebases, communicating with maintainers, and handling merge conflicts in high-pressure environments. We'll look at the etiquette of opening Pull Requests, the importance of detailed documentation, and how to find the right projects that match your current skill level.",
    tag: "Lessons Learned",
    date: "2024-06-15",
    slugUrl: "lessons-from-oss",
    time: "10 min read",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Building Real-Time Apps with Socket.io and Hono",
    content: "Full blog content would go here...",
    description:
      "Real-time communication is becoming a standard requirement for modern web apps. In this tutorial, we build a high-performance chat application using Hono as our backend framework and Socket.io for the WebSocket layer. We explore how to handle horizontal scaling, manage room-based namespaces, and ensure that your server stays responsive under heavy load. We also touch upon the security aspects of WebSockets including JWT authentication.",
    tag: "Web Development",
    date: "2024-07-20",
    slugUrl: "real-time-apps",
    time: "15 min read",
    isFeatured: false,
  },
];

// --Total Blog number--
const totalNumber = blogPosts.length.toString();

const BlogPageUI = () => {
  return (
    <main className="min-h-screen bg-secondary py-10">
      {/* Navbar */}
      <BlogNavbar articles={totalNumber} />

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
          <div>
            <BlogPage blogPosts={blogPosts} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPageUI;
