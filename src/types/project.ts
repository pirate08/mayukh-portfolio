export interface StrapiImage {
  url: string;
  alternativeText?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  slug: string;
  section: "Full Stack" | "Frontend" | "Backend";
  isFeatured: boolean;
  year: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
  projectHighlights: string[];
  image?: StrapiImage;
  screenshots?: StrapiImage[];
}
