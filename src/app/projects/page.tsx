import type { Metadata } from "next";
import ProjectsPageNavbar from "@/components/layout/ProjectPageNavbar";
import ProjectsPage from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Mayukh Portfolio",
  description:
    "Explore projects built using Next.js, React, TypeScript and modern web technologies.",
};

const ProjectsPageUI = () => {
  return (
    <main className="min-h-screen bg-secondary py-10">
      {/* Navbar */}
      <ProjectsPageNavbar />

      {/* Page Content */}
      <section className="pt-24 md:pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* --Header Section goes here-- */}
          <div>
            <span className="font-mono text-primary text-base mb-2">
              / projects
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-slate-900 mt-2">
              All Projects
            </h1>

            <p className="mt-4 text-gray-500 text-[18px] max-w-2xl ">
              A collection of projects I've built — from full-stack platforms to
              experimental tools. Each one pushed my skills forward.
            </p>
          </div>
          {/* --Project's card goes here-- */}
          <div>
            <ProjectsPage />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPageUI;
