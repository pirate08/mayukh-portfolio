export interface StrapiImage {
  url: string;
  alternativeText?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  description: string;
  tag: string;
  articleTags?: string[];
  date: string;
  isFeatured?: boolean;
  slug: string;
  coverImage?: StrapiImage;
  authorName?: string;
}
