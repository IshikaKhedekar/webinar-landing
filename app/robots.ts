import type { MetadataRoute } from "next";

// Update this once a custom domain is connected.
const SITE_URL = "https://efficiency-masterclass.vercel.app";

// Next.js recognizes this file and serves it at /robots.txt automatically.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/thanks",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
