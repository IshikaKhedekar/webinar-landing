import type { MetadataRoute } from "next";

// Update this once a custom domain is connected.
const SITE_URL = "https://efficiency-masterclass.vercel.app";

// Next.js recognizes this file and serves it at /sitemap.xml automatically.
// Only the homepage is listed — /thanks is a private, noindex confirmation
// page and is deliberately left out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
