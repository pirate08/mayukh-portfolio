import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuTag, LuCalendar } from "react-icons/lu";
import Link from "next/link";
// import { ProjectDetails } from "@/types/project";

// — Demo data, replace with Strapi fetch later —
const project = {
  title: "E-Commerce Platform",
  category: "Full Stack",
  year: "2024",
  description:
    "This e-commerce platform was built from the ground up to handle high-traffic retail operations. It features real-time inventory tracking, Stripe payment integration, an admin dashboard with analytics, and a responsive storefront. The architecture uses server-side rendering for SEO and client-side hydration for interactivity.",
  highlights: [
    "Handles 10k+ concurrent users",
    "Real-time inventory sync across warehouses",
    "Stripe payment integration with webhooks",
    "Admin dashboard with sales analytics",
  ],
  tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  githubUrl: "https://github.com/pirate08",
  liveUrl: "#",
  screenshots: [
    { id: 1, label: "Storefront" },
    { id: 2, label: "Admin Dashboard" },
    { id: 3, label: "Product Management" },
    { id: 4, label: "Analytics Dashboard" },
  ],
};

const ProjectDetails = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* ── Hero Block ── */}
      <div className="flex flex-col gap-5">
        {/* Category + Year badges */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
            <LuTag className="text-sm" />
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
            <LuCalendar className="text-sm" />
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Main image placeholder */}
        <div className="w-full h-72 md:h-96 bg-linear-to-br from-emerald-50 to-teal-100 rounded-2xl flex items-center justify-center mt-2">
          <span className="text-gray-300 font-mono text-sm">Project Image</span>
        </div>
      </div>

      {/* ── Highlights + Sidebar ── */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Highlights */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Project Highlights
          </h2>
          <ul className="flex flex-col gap-4">
            {project.highlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <BsCheckCircle className="text-primary text-xl mt-0.5 shrink-0" />
                <span className="text-gray-600 text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Sidebar */}
        <div className="md:w-64 flex flex-col gap-8">
          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-4">
              Links
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-primary text-sm font-medium transition-colors duration-200"
              >
                <FaGithub className="text-lg" />
                Source Code
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-primary text-sm font-medium transition-colors duration-200"
              >
                <FiExternalLink className="text-lg" />
                Live Demo
              </Link>
            </div>
          </div>

          {/* View Live Button */}
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
          >
            View Live
            <FiExternalLink />
          </Link>
        </div>
      </div>

      {/* ── Screenshots ── */}
      <div className="pb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.screenshots.map((shot) => (
            <div
              key={shot.id}
              className="h-56 bg-linear-to-br from-emerald-50 to-teal-100 rounded-2xl flex items-center justify-center"
            >
              <span className="text-gray-300 font-mono text-sm">
                {shot.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
