import React from "react";
import ProjectCard from "../ui/ProjectCard";
import Link from "next/link";
import { Project } from "@/types/project";
import { FiArrowRight } from "react-icons/fi";
import { getFeaturedProjects } from "@/lib/strapi";

const Projects = async () => {
  const projects = await getFeaturedProjects();
  return (
    <section
      id="projects"
      className="bg-secondary/30 py-24 px-4"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h6 className="font-mono text-primary text-base mb-2">My Work</h6>
          <h2
            id="projects-heading"
            className="text-3xl md:text-[36px] font-bold text-slate-900"
          >
            Featured Projects
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-[20px] mt-5 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one taught me
            something new and helped me grow as a developer.
          </p>
        </div>

        {/* Project Cards or Empty State */}
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-mono text-primary text-lg">
              No featured projects yet.
            </p>
            <p className="text-gray-600 text-sm mt-2">Check back soon!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-primary text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
          >
            Other Noteworthy Projects
            <FiArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
