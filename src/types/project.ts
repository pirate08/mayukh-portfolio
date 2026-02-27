export interface Project {
  id: number;
  imageUrl?: string;
  title: string;
  projectUrl: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface ProjectCard {
  id: number;
  imageUrl?: string;
  title: string;
  description: string;
  section: "Full Stack" | "Frontend" | "Backend";
  isFeatured?: boolean;
  slugUrl: string;
  year: Date;
  tags: string[];
}

export interface ProjectDetails extends ProjectCard {
  projectHightlights: string[];
  liveUrl: string;
  githubUrl: string;
  screeshots?: string[];
}
