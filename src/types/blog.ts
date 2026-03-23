export interface StrapiImage {
  url: string;
  alternativeText?: string;
}

export interface StrapiBlock {
  type: string;
  children: { type: string; text: string }[];
}

export interface BlogPost {
  id: number;
  title: string;
  content: StrapiBlock[];
  description: string;
  tag: string;
  articleTags?: string[];
  date: string;
  createdAt: string;
  isFeatured?: boolean;
  slug: string;
  coverImage?: StrapiImage;
  authorName?: string;
}
