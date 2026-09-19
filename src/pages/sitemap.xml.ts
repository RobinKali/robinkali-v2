import type { APIContext } from "astro";
import { legalDocuments } from "../data/legal";

export const prerender = true;

const withTrailingSlash = (path: string) =>
  path.endsWith("/") ? path : `${path}/`;

export function GET({ site }: APIContext) {
  if (!site) throw new Error("Astro.site is required to generate sitemap.xml");

  const paths = [
    "/",
    "/about/",
    "/attributions/",
    ...legalDocuments.map((doc) => doc.path),
  ];

  const urls = paths
    .map((path) => `  <url><loc>${new URL(withTrailingSlash(path), site).toString()}</loc></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
