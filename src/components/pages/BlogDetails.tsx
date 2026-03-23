import { BlogPost } from "@/types/blog";
import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { LuTag, LuCalendar } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

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
      {blogs.coverImage && (
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg">
          <Image
            src={`${STRAPI_URL}${blogs.coverImage.url}`}
            alt={blogs.title}
            width={800}
            height={400}
            unoptimized
            className="w-full h-full object-cover bg-black/5 rounded-lg"
          />
        </div>
      )}

      {/* ── Article Body ── */}
      <article className="flex flex-col gap-4">
        {Array.isArray(blogs.content) ? (
          blogs.content.map((block, i) => {
            // --Heading blocks--
            if (block.type === "heading") {
              const text = block.children
                .map((c: { text: string }) => c.text)
                .join("");
              if (block.level === 1)
                return (
                  <h1
                    key={i}
                    className="text-3xl font-bold text-slate-900 mt-4"
                  >
                    {text}
                  </h1>
                );
              if (block.level === 2)
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-slate-900 mt-4"
                  >
                    {text}
                  </h2>
                );
              if (block.level === 3)
                return (
                  <h3 key={i} className="text-xl font-bold text-slate-900 mt-3">
                    {text}
                  </h3>
                );
              if (block.level === 4)
                return (
                  <h4 key={i} className="text-lg font-bold text-slate-800 mt-3">
                    {text}
                  </h4>
                );
            }

            // --Paragraph blocks--
            if (block.type === "paragraph") {
              return (
                <p
                  key={i}
                  className="text-gray-700 text-base md:text-lg leading-relaxed"
                >
                  {block.children.map(
                    (
                      child: {
                        text: string;
                        bold?: boolean;
                        italic?: boolean;
                        underline?: boolean;
                        code?: boolean;
                      },
                      j: number,
                    ) => {
                      if (child.bold && child.italic)
                        return (
                          <strong key={j}>
                            <em>{child.text}</em>
                          </strong>
                        );
                      if (child.bold)
                        return (
                          <strong
                            key={j}
                            className="font-semibold text-slate-900"
                          >
                            {child.text}
                          </strong>
                        );
                      if (child.italic)
                        return (
                          <em key={j} className="italic">
                            {child.text}
                          </em>
                        );
                      if (child.underline) return <u key={j}>{child.text}</u>;
                      if (child.code)
                        return (
                          <code
                            key={j}
                            className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono"
                          >
                            {child.text}
                          </code>
                        );
                      return <span key={j}>{child.text}</span>;
                    },
                  )}
                </p>
              );
            }

            // --List blocks--
            if (block.type === "list") {
              const items = block.children.map(
                (item: { children: { text: string }[] }, j: number) => (
                  <li
                    key={j}
                    className="text-gray-700 text-base md:text-lg leading-relaxed"
                  >
                    {item.children
                      .map((c: { text: string }) => c.text)
                      .join("")}
                  </li>
                ),
              );
              return block.format === "ordered" ? (
                <ol
                  key={i}
                  className="list-decimal list-inside flex flex-col gap-1 pl-4"
                >
                  {items}
                </ol>
              ) : (
                <ul
                  key={i}
                  className="list-disc list-inside flex flex-col gap-1 pl-4"
                >
                  {items}
                </ul>
              );
            }

            // --Quote blocks--
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-primary/40 pl-5 italic text-gray-500"
                >
                  {block.children.map((c: { text: string }) => c.text).join("")}
                </blockquote>
              );
            }

            // --Code blocks--
            if (block.type === "code") {
              return (
                <pre
                  key={i}
                  className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm font-mono"
                >
                  <code>
                    {block.children
                      .map((c: { text: string }) => c.text)
                      .join("")}
                  </code>
                </pre>
              );
            }

            // --Divider / horizontal rule--
            if (block.type === "thematic-break") {
              return <hr key={i} className="border-gray-200 my-2" />;
            }

            // --Fallback for unknown blocks--
            return (
              <p key={i} className="text-gray-700 text-base leading-relaxed">
                {block.children
                  ?.map((c: { text: string }) => c.text)
                  .join("") ?? ""}
              </p>
            );
          })
        ) : (
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {blogs.content}
          </p>
        )}
      </article>

      {/* ── Divider ── */}
      <hr className="border-gray-200" />

      {/* ── Prev and Next Article ── */}
      <div className="flex justify-between items-center gap-4">
        {/* Prev */}
        <div className="flex-1">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
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
              href={`/blog/${next.slug}`}
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
