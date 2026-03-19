import BlogDetailsNavbar from "@/components/layout/BlogDetailsNavbar";
import BlogDetails from "@/components/pages/BlogDetails";
import React from "react";
import type { Metadata } from "next";
import { getBlogBySlug, getAdjacentBlogs } from "@/lib/strapi"; // ✅ from strapi
import { notFound } from "next/navigation";
import { getRelativeTime } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug); // ✅ await
  return {
    title: blog
      ? `${blog.title} | Mayukh Portfolio`
      : "Blog Not Found | Mayukh Portfolio",
    description:
      blog?.description || "The blog post you are looking for does not exist.",
  };
}

const SingleBlog = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  // ✅ all three run in parallel — faster
  const [blogData, { prev, next }] = await Promise.all([
    getBlogBySlug(slug),
    getAdjacentBlogs(slug),
  ]);

  if (!blogData) return notFound();

  return (
    <main className="min-h-screen bg-secondary py-10">
      <BlogDetailsNavbar time={getRelativeTime(blogData.date)} />
      <section className="px-4 pt-20">
        <div className="max-w-3xl mx-auto">
          <BlogDetails blogs={blogData} prev={prev} next={next} />
        </div>
      </section>
    </main>
  );
};

export default SingleBlog;
