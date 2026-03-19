const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// --Genric fetch function--
export async function fetchStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi fetched for: ${endpoint}`);
  }

  const json = await res.json();
  return json.data;
}
