import { base_url } from "@/app/sitemap";
import { fetchData } from "@/db/client";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  let talentCounts = await fetchData<number>(`
		count(*[_type == 'talents'])
		`);
  let idList = [];
  for (let i = 0; i < talentCounts; i++) {
    idList.push({
      id: i,
    });
  }
  return idList;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const talents = await fetchData<any[]>(`
		*[_type == 'talents']{
			name,
			title,
			'slug':  slug.current,
		}`);
  return talents.map((talent) => ({
    url: `${base_url}/talent/${talent.slug}`,
    priority: 0.8,
    lastModified: talent._updatedAt,
  }));
}
