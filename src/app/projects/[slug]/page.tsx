import ProjectsDetailsNavbar from "@/components/layout/ProjectDetailsNavbar";
import ProjectDetails from "@/components/pages/ProjectDetails";
import { getProjectBySlug } from "@/lib/projectsData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ✅ Dynamic metadata per project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project
      ? `${project.title} | Mayukh Portfolio`
      : "Project | Mayukh Portfolio",
    description: project?.description,
  };
}

const SingleProject = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // ✅ 404 if slug doesn't match any project
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-secondary py-10">
      <ProjectsDetailsNavbar
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
      />
      <section className="px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* ✅ Pass project data as prop */}
          <ProjectDetails project={project} />
        </div>
      </section>
    </main>
  );
};

export default SingleProject;
