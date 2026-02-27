import React from "react";
import ProjectPageCard from "../ui/ProjectPageCard";
import { ProjectCard } from "@/types/project";

const demoProjects: ProjectCard[] = [
  {
    id: 1,
    imageUrl: "/images/E-commerce-logo.png",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory, secure payment processing, and a complete admin dashboard.",
    section: "Full Stack",
    isFeatured: true,
    slugUrl: "e-commerce-platform",
    year: new Date("2024-01-01"),
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    imageUrl: "/images/Portfolio-logo.png",
    title: "Developer Portfolio CMS",
    description:
      "Interactive analytics dashboard with dynamic charts, role-based access control, and REST API integration.",
    section: "Frontend",
    isFeatured: false,
    slugUrl: "developer-portfolio-cms",
    year: new Date("2023-01-01"),
    tags: ["Next.js", "TypeScript", "Chart.js"],
  },
  {
    id: 3,
    title: "Task Management App",
    imageUrl: "/images/Task-management-logo.png",
    description:
      "Scalable backend authentication service using JWT, OAuth, and microservices architecture.",
    section: "Backend",
    isFeatured: true,
    slugUrl: "task-management-app",
    year: new Date("2022-01-01"),
    tags: ["Node.js", "Express", "MongoDB"],
  },
];

const ProjectsPage = () => {
  return (
    <section>
      <div className="mt-16 md:mt20">
        {/* <h1>Ruk ja saala! mein aa raha hu</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
          {demoProjects.map((project) => (
            <ProjectPageCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
