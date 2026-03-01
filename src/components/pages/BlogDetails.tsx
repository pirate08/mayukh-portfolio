import { BlogPost } from "@/types/blog";
import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { LuTag, LuCalendar } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

const BlogDetails = ({
  blogs,
  prev,
  next,
}: {
  blogs: BlogPost;
  prev: BlogPost | null;
  next: BlogPost | null;
}) => {
  // --Function to covert date in  month: "short",  day: "numeric", year: "numeric",
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-10">
      {/* ── Hero Block ── */}
      <div className="flex flex-col gap-6">
        {/* Tag + Date + Profile badges */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
            <CgProfile className="text-sm" />

            {blogs.authorName}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-black border bg-gray-200 border-gray-200 px-2.5 py-1 rounded-full">
            <LuTag className="text-sm" />
            {blogs.tag}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
            <LuCalendar className="text-sm" />

            {formatDate(blogs.date)}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          {blogs.title}
        </h1>

        {/* Description blockquote */}
        <blockquote className="border-l-4 border-primary/40 pl-5">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed italic">
            {blogs.description}
          </p>
        </blockquote>

        {/* Article keyword tags */}
        <div className="flex flex-wrap gap-2">
          {blogs.articleTags?.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-primary font-semibold bg-primary/10 border border-primary/20 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* --Article CoverImage-- */}
      {blogs.coverImageUrl && (
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg">
          <Image
            src={blogs.coverImageUrl}
            alt={blogs.title}
            width={800}
            height={400}
            className="w-full h-full object-cover bg-black/5 rounded-lg"
          />
        </div>
      )}

      {/* ── Article Body ── */}
      <article className="flex flex-col gap-6">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
          {blogs.content}
        </p>
      </article>

      {/* ── Divider ── */}
      <hr className="border-gray-200" />

      {/* ── Prev and Next Article ── */}
      <div className="flex justify-between items-center gap-4">
        {/* Prev */}
        <div className="flex-1">
          {prev ? (
            <Link
              href={`/blog/${prev.slugUrl}`}
              className="group w-full block bg-white border border-gray-200 rounded-2xl px-6 py-5 hover:border-primary hover:shadow-sm transition ease-in-out hover:-translate-y-1 duration-200"
            >
              <p className="text-sm text-gray-400 mb-1 flex items-center gap-1">
                <FiArrowLeft className="text-xs" /> Previous
              </p>
              <p className="text-base font-semibold text-slate-900 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}{" "}
          {/* empty div keeps Next pushed right when no Prev */}
        </div>

        {/* Next */}
        <div className="flex-1">
          {next ? (
            <Link
              href={`/blog/${next.slugUrl}`}
              className="group w-full block bg-white border border-gray-200 rounded-2xl px-6 py-5 hover:border-primary hover:shadow-sm transition ease-in-out hover:-translate-y-1 duration-200"
            >
              <p className="text-sm text-gray-400 mb-1 flex items-center justify-end gap-1">
                Next <FiArrowRight className="text-xs" />
              </p>
              <p className="text-base font-semibold text-slate-900 group-hover:text-primary transition-colors duration-200 line-clamp-1 text-right">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* ── Back to all articles ── */}
      <div className="flex justify-center pb-10">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200"
        >
          <FiArrowLeft />
          Back to all articles
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
