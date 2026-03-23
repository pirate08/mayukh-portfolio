export interface StrapiImage {
  url: string;
  alternativeText?: string;
}

export interface StrapiBlockChild {
  type: string;
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
}

export interface StrapiBlock {
  type: string;
  level?: number;
  format?: string;
  children: StrapiBlockChild[] | { children: StrapiBlockChild[] }[];
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
