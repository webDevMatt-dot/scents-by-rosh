import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, 
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProducts() {
  return client.fetch(`*[_type == "product"] {
    _id,
    name,
    inspiredBy,
    price,
    category,
    initial,
    "image": image.asset->url
  }`);
}