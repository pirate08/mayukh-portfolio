import ProjectsDetailsNavbar from "@/components/layout/ProjectDetailsNavbar";
import ProjectDetails from "@/components/pages/ProjectDetails";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Project Details | Mayukh Portfolio`,
  description: "Explore detailed information about a specific project.",
};

const SingleProject = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-secondary py-10">
      {/* --Navbar of this page goes here-- */}
      <ProjectsDetailsNavbar />

      <section className="px-4 pt-20">
        {/* --Content of this page goes here-- */}
        <div className="max-w-4xl mx-auto">
          <ProjectDetails />
        </div>
      </section>
    </main>
  );
};

export default SingleProject;
