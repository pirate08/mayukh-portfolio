// --title,description,tag,date,slugUrl,coverImageUrl,authorName,authorAvatarUrl
export interface BlogPost {
  id: number;
  title: string;
  content: string;
  description: string;
  tag: string;
  articleTags: string[];
  date: string;
  isFeatured?: boolean;
  // --Remove it when dynamic data has been added--
  time: string;
  slugUrl: string;
  coverImageUrl?: string;
  authorName?: string;
}
