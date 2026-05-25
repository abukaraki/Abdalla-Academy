import fs from "node:fs";
import path from "node:path";
import { loadContent, rootDir } from "./content-tools.mjs";

const baseUrl = "https://abdalla-academy.abdabukaraki.workers.dev";
const defaultLastmod = "2026-05-25";

const staticPages = [
  "",
  "courses.html",
  "software.html",
  "lectures.html",
  "articles.html",
  "videos.html",
  "materials.html",
  "programming.html",
  "compiler.html",
  "ai.html",
  "errors.html",
  "blog.html",
  "search.html",
  "about.html",
  "contact.html",
  "privacy.html",
  "terms.html"
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildUrl(pathname) {
  if (!pathname) return `${baseUrl}/`;
  return `${baseUrl}/${pathname}`;
}

const urls = [];

for (const page of staticPages) {
  urls.push({
    loc: buildUrl(page),
    lastmod: defaultLastmod
  });
}

for (const item of loadContent()) {
  const lastmod = item.date || defaultLastmod;
  const contentUrl = `content.html?id=${encodeURIComponent(item.id)}`;

  urls.push({
    loc: buildUrl(contentUrl),
    lastmod
  });

  if (item.type === "course" && Array.isArray(item.playlist)) {
    item.playlist.forEach((_, index) => {
      urls.push({
        loc: buildUrl(`${contentUrl}&lesson=${index + 1}`),
        lastmod
      });
    });
  }
}

const uniqueUrls = Array.from(
  new Map(urls.map((entry) => [entry.loc, entry])).values()
);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...uniqueUrls.map((entry) => {
    return [
      "  <url>",
      `    <loc>${escapeXml(entry.loc)}</loc>`,
      `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`,
      "  </url>"
    ].join("\n");
  }),
  "</urlset>",
  ""
].join("\n");

fs.writeFileSync(path.join(rootDir, "sitemap.xml"), xml, "utf8");

console.log(`Generated sitemap.xml with ${uniqueUrls.length} URLs.`);

