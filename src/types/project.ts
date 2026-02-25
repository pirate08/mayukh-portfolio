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