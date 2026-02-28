// --title,description,tag,date,slugUrl,coverImageUrl,authorName,authorAvatarUrl
export interface BlogPost {
  id: number;
  title: string;
  content: string;
  description: string;
  tag: string;
  date: string;
  // --Remove it when dynamic data has been added--
  time: string;
  slugUrl: string;
  coverImageUrl?: string;
  authorName?: string;
  authorAvatarUrl?: string;
}

export interface BlogDetails extends BlogPost {
  content: string;
}
