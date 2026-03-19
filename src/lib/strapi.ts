import { Project } from "@/types/project";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// --Genric fetch function--
export async function fetchStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi fetched for: ${endpoint}`);
  }

  const json = await res.json();
  return json.data;
}

// --Projects All fetch goes here--
export async function getAllProjects(): Promise<Project[]> {
  return fetchStrapi("projects?populate=image&sort=createdAt:desc");
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const data = await fetchStrapi(
    `projects?filters[slug][$eq]=${slug}&populate=image,screenshots`,
  );
  return data[0] ?? null;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return fetchStrapi("projects?filters[isFeatured][$eq]=true&populate=image");
}
