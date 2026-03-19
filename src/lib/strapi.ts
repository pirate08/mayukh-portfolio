import { BlogPost } from "@/types/blog";
import { Project } from "@/types/project";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// --Genric fetch function--
export async function fetchStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
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

// --Blogs All Fetch goes here--
export async function getAllBlogs(): Promise<BlogPost[]> {
  return fetchStrapi("blogs?populate=coverImage&sort=date:desc");
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchStrapi(
    `blogs?filters[slug][$eq]=${slug}&populate=coverImage`,
  );
  return data[0] ?? null;
}

export async function getFeaturedBlogPost(): Promise<BlogPost | null> {
  const data = await fetchStrapi(
    "blogs?filters[isFeatured][$eq]=true&populate=coverImage",
  );
  return data[0] ?? null;
}

export async function getAdjacentBlogs(slug: string): Promise<{
  prev: BlogPost | null;
  next: BlogPost | null;
}> {
  // fetch all blogs sorted by date to find neighbours
  const allBlogs = await fetchStrapi("blogs?sort=date:asc");

  const index = allBlogs.findIndex((blog: BlogPost) => blog.slug === slug);

  return {
    prev: index > 0 ? allBlogs[index - 1] : null,
    next: index < allBlogs.length - 1 ? allBlogs[index + 1] : null,
  };
}
