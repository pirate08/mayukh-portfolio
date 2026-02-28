import React from "react";
import Image from "next/image";
import { ProjectCard } from "@/types/project";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectCard;
}

const ProjectPageCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="bg-white rounded-3xl shadow-md overflow-hidden max-w-md w-full cursor-pointer hover:scale-105 transition-transform duration-300">
      <Link href={`/projects/${project.slugUrl}`}>
        {/* --- Image Section --- */}
        <div className="relative h-56 bg-linear-to-br from-emerald-100 to-teal-200 flex items-center justify-center">
          {/* Featured Badge */}
          {project.isFeatured && (
            <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          )}

          <Image
            src={project.imageUrl || "/images/placeholder.png"}
            alt={`Screenshot of ${project.title}`}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* --- Content Section --- */}
        <div className="p-6">
          {/* Top Row */}
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-emerald-600 font-medium">
              {project.section}
            </span>
            <span className="text-gray-500">{project.year.getFullYear()}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-slate-900 hover:text-primary mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectPageCard;
