import React from "react";
import ProjectCard from "../ui/ProjectCard";
import Link from "next/link";
import { Project } from "@/types/project";
import { FiArrowRight } from "react-icons/fi";

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    imageUrl: "/images/E-commerce-logo.png",
    projectUrl: "/projects/e-commerce-platform",
    description:
      "A full-featured e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built for scale with modern technologies.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/pirate08",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    imageUrl: "/images/Task-management-logo.png",
    projectUrl: "/projects/task-management-app",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop boards, and team workspace support. Inspired by modern productivity tools.",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    githubUrl: "https://github.com/pirate08",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Developer Portfolio CMS",
    imageUrl: "/images/Portfolio-logo.png",
    projectUrl: "/projects/developer-portfolio-cms",
    description:
      "A headless CMS-powered portfolio system built with Strapi and Next.js. Fully dynamic content management with SEO optimization and fast static generation.",
    tags: ["Next.js", "Strapi", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/pirate08",
    liveUrl: "#",
    featured: true,
  },
];

const Projects = () => {
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

        {/* Project Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

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
