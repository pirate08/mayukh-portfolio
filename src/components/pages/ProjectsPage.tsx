import React from "react";
import ProjectPageCard from "../ui/ProjectPageCard";
import { Project } from "@/types/project";

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  if (projects.length === 0) {
    return (
      <div className="mt-16 text-center py-20">
        <p className="font-mono text-primary text-lg">No projects found.</p>
        <p className="text-gray-400 text-sm mt-2">
          Check back soon — projects are being added!
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
          {projects.map((project) => (
            <ProjectPageCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
