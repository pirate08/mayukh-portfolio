import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuTag, LuCalendar } from "react-icons/lu";
import { ProjectDetails as ProjectDetailsType } from "@/types/project";
import Link from "next/link";
import Image from "next/image";

interface ProjectDetailsProps {
  project: ProjectDetailsType;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="flex flex-col gap-12">
      {/* ── Hero Block ── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
            <LuTag className="text-sm" />
            {project.section}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
            <LuCalendar className="text-sm" />
            {project.year.getFullYear()}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          {project.title}
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* ✅ GitHub + Live links filled in */}
        <div className="flex items-center gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200 text-gray-500"
            aria-label="View source code on GitHub"
          >
            <FaGithub className="inline-block mr-1" /> Source Code
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200 text-gray-500"
            aria-label="View live demo"
          >
            <FiExternalLink className="inline-block mr-1" /> Live Demo
          </Link>
        </div>

        <div className="w-full h-72 md:h-96 bg-linear-to-br from-emerald-50 to-teal-100 rounded-2xl flex items-center justify-center mt-2">
          <Image
            src={project.imageUrl || "/images/default-project.png"}
            alt="Project Image"
            width={600}
            height={400}
            className="text-gray-300 font-mono text-sm"
          />
        </div>
      </div>

      {/* ── Highlights + Sidebar ── */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Project Highlights
          </h2>
          <ul className="flex flex-col gap-4">
            {project.projectHightlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <BsCheckCircle className="text-primary text-xl mt-0.5 shrink-0" />
                <span className="text-gray-600 text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-64 flex flex-col gap-8">
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

          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-4">
              Links
            </h3>
            <div className="flex flex-col gap-3">
              {/* ✅ Both links filled from prop */}
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-primary text-sm font-medium transition-colors duration-200"
              >
                <FaGithub className="text-lg" /> Source Code
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-primary text-sm font-medium transition-colors duration-200"
              >
                <FiExternalLink className="text-lg" /> Live Demo
              </Link>
            </div>
          </div>

          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
          >
            View Live <FiExternalLink />
          </Link>
        </div>
      </div>

      {/* ── Screenshots ── */}
      {project.screeshots && project.screeshots.length > 0 && (
        <div className="pb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screeshots.map((shot, i) => (
              <div
                key={i}
                className="h-56 bg-linear-to-br from-emerald-50 to-teal-100 rounded-2xl flex items-center justify-center"
              >
                <Image
                  src={shot}
                  alt={`Screenshot ${i + 1}`}
                  width={600}
                  height={400}
                  className="text-gray-300 font-mono text-sm"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
