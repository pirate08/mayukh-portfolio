import BlogDetailsNavbar from "@/components/layout/BlogDetailsNavbar";
import BlogDetails from "@/components/pages/BlogDetails";
import React from "react";
import type { Metadata } from "next";
import { getBlogBySlug, getAdjacentBlogs } from "@/lib/blogData";
import { notFound } from "next/navigation";

// --Dynamic Metadata for individual per project--
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);
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
  const blogData = getBlogBySlug(slug);

  const { prev, next } = getAdjacentBlogs(slug);

  // --404 if not found--
  if (!blogData) return notFound();
  return (
    <main className="min-h-screen bg-secondary py-10">
      {/* --Navbar goes here-- */}
      <BlogDetailsNavbar time={blogData.time} />

      {/* --Single Blog Details Content-- */}
      <section className="px-4 pt-20">
        <div className="max-w-3xl mx-auto">
          {/* ✅ Pass project data as prop */}
          <BlogDetails blogs={blogData} prev={prev} next={next} />
        </div>
      </section>
    </main>
  );
};

export default SingleBlog;
