import React from "react";
import { Project } from "@/types/project";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsFolderFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer">
      <div className="flex flex-col md:flex-row">
        {/* Left: Content */}
        <div className="flex-1 p-8 flex flex-col gap-4">
          {/* Featured label */}
          <div className="flex items-center gap-2 text-primary">
            <BsFolderFill className="text-lg" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase">
              Featured Project
            </span>
          </div>

          {/* Title */}
          <Link href={project.projectUrl}>
            <h3 className="text-2xl font-bold text-slate-900">
              {project.title}
            </h3>
          </Link>

          {/* Description */}
          <Link href={project.projectUrl}>
            <p className="text-gray-500 text-base leading-relaxed">
              {project.description}
            </p>
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 mt-2">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-primary text-sm font-medium transition-colors duration-200"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <FaGithub className="text-lg" />
              Code
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-primary text-sm font-medium transition-colors duration-200"
              aria-label={`View ${project.title} live demo`}
            >
              <FiExternalLink className="text-lg" />
              Live Demo
            </Link>
          </div>
        </div>

        {/* Right: Image or Fallback Icon */}
        <div className="md:w-80 bg-linear-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-10 min-h-48">
          {project.imageUrl ? (
            <div className="relative w-full h-full min-h-48">
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          ) : (
            <BsFolderFill className="text-5xl text-primary/30" />
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
