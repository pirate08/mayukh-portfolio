import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

interface BlogPageProps {
  blogPosts: BlogPost[];
}

const BlogPage = ({ blogPosts }: BlogPageProps) => {
  // Get all featured post
  const featuredPost = blogPosts.filter((post) => post.isFeatured);

  // Remove featured posts from list
  const regularPosts = blogPosts.filter((post) => !post.isFeatured);

  return (
    <section className="mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* --- Featured Article --- */}
        {featuredPost.map((post) => (
          <Link
            href={`/blog/${post.slugUrl}`}
            key={post.id}
            className="block mb-16"
          >
            <article className="group bg-white rounded-3xl p-8 shadow-sm mb-14 border border-gray-100 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-100 text-emerald-600 text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                  {post.tag}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 max-w-5xl line-clamp-2">
                {post.description}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt size={16} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRegClock size={16} />
                    {post.time}
                  </span>
                </div>

                <span className="text-primary font-medium opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Read article →
                </span>
              </div>
            </article>
          </Link>
        ))}

        {/* --- Article List --- */}
        <div className="space-y-10">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-gray-100 pb-8 hover:bg-white transition-colors duration-300 rounded-lg p-4 cursor-pointer"
            >
              {/* Left Meta */}
              <div className="flex items-center gap-6 text-sm text-gray-500 md:w-48">
                <span>{post.date}</span>
                <span>{post.time}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <Link href={`/blog/${post.slugUrl}`}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>

              {/* Tag */}
              <div className="md:w-32 flex md:justify-end">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                  {post.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
