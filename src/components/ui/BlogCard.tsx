import React from "react";
import { BlogPost } from "@/types/blog";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { getRelativeTime } from "@/lib/utils";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <article className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg py-5 px-4 transition-shadow duration-300 overflow-hidden cursor-pointer">
      <div className="flex flex-col gap-5">
        {/* --Tag-- */}
        <div>
          <h3 className="text-sm text-semibold text-primary bg-primary/10 px-2 py-1 rounded-full w-fit">
            {blog.tag}
          </h3>
        </div>
        {/* --Title-- */}
        <div>
          <Link href={blog.slugUrl}>
            <h2 className="text-xl text-gray-800">{blog.title}</h2>
          </Link>
        </div>
        {/* --Description-- */}
        <div>
          <p className="text-gray-600 leading-relaxed line-clamp-4">
            {blog.description}
          </p>
        </div>
        {/* --Line in middle-- */}
        <div className="border-t border-gray-200 mt-2"></div>
        {/* --Date, Time and Read more button--  */}
        <div className="flex items-center justify-between">
          {/* --Date and Time goes here-- */}
          <div className="flex items-center gap-3">
            {/* --Date goes here-- */}
            <div className="flex items-center gap-2">
              <CiCalendar className="text-gray-500" />
              <span className="text-gray-500 text-xs">{blog.date}</span>
            </div>
            {/* --Time goes here-- */}
            <div className="flex items-center gap-2">
              <IoMdTime className="text-gray-500" />
              <span className="text-gray-500 text-xs">{blog.time}</span>
              {/* --{getRelativeTime(blog.date)}-- */}
            </div>
          </div>
          {/* --Read more button goes here-- */}
          <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <Link
              href={blog.slugUrl}
              className="flex text-sm items-center gap-1 text-primary font-medium"
            >
              Read More
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
