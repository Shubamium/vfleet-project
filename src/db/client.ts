import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "3fzujre3",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source)
    return {
      url: () =>
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
    };
  return builder.image(source);
}

const config = {
  next: {
    revalidate: 5,
  },
};
export function fetchData<T>(grocQuery: string) {
  return client.fetch<T>(grocQuery, {}, { ...config });
}
