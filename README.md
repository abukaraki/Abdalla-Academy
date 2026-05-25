# Abdalla Academy

Abdalla Academy is a bilingual programming learning site deployed on Cloudflare Workers.

## What is included

- Arabic and English interface
- Courses, software, lectures, articles, blog, materials, and programming sections
- Compiler page
- Programming AI page
- Single content detail page
- File-based content updates from GitHub
- Privacy, Terms, Contact, Sitemap, and Robots files
- Content templates, validation, and sitemap generation tools

There is no public admin page. Content is updated by editing repository files.

## Live site

Production URL:

`https://abdalla-academy.abdabukaraki.workers.dev/`

## Add content

Read [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

Quick workflow:

```powershell
node tools/validate-content.mjs
node tools/generate-sitemap.mjs
```

## Before AdSense submission

- Add more original lectures, articles, and materials.
- Avoid empty categories, copied content, misleading buttons, and intrusive ad placement.
- Keep Privacy, Terms, Contact, robots.txt, and sitemap.xml updated.
