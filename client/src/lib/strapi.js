const strapiUrl = import.meta.env.STRAPI_URL;

export async function fetchPosts() {
  const response = await fetch(`${strapiUrl}/api/posts?populate=*`);
  const { data } = await response.json();
  return data;
}