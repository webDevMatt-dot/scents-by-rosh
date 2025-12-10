import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Make sure this is TRUE for faster caching
});

const builder = imageUrlBuilder(client);

// This helper generates the actual URL
export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProducts() {
  // CHANGED: We now fetch "image" as the raw object, not "image.asset->url"
  return client.fetch(`*[_type == "product"] {
    _id,
    name,
    inspiredBy,
    price,
    category,
    initial,
    image 
  }`);
}