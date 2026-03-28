const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getImageUrl = (url: string): string => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${STRAPI_URL}${url}`;
};
