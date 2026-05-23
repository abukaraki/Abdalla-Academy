# Content Guide

This site has no public admin page. Content is managed from GitHub by editing files.

## Add a Lecture Video

1. Upload your video file to:
   `media/videos/`
2. Open:
   `assets/content.js`
3. Add a new item inside `window.SITE_CONTENT.items`:

```js
{
  id: "lesson-2-css-basics",
  type: "lectures",
  date: "2026-05-24",
  duration: "18 min",
  level: "Beginner",
  title: {
    ar: "أساسيات CSS",
    en: "CSS Basics"
  },
  summary: {
    ar: "شرح مبسط لتنسيق الصفحات باستخدام CSS.",
    en: "A simple explanation of styling pages with CSS."
  },
  mediaType: "video",
  video: "media/videos/css-basics.mp4",
  body: {
    ar: [
      "في هذا الدرس نتعلم طريقة ربط CSS بصفحة HTML.",
      "نطبق أمثلة على الألوان والمسافات والخطوط."
    ],
    en: [
      "In this lesson, we learn how to connect CSS to an HTML page.",
      "We practice colors, spacing, and typography."
    ]
  }
}
```

## Add an Article or Blog Post

Use `type: "articles"` for long educational articles, or `type: "blog"` for shorter updates.

```js
{
  id: "how-to-study-html",
  type: "articles",
  date: "2026-05-24",
  duration: "7 min read",
  level: "Guide",
  title: {
    ar: "كيف تدرس HTML بطريقة صحيحة",
    en: "How to Study HTML Properly"
  },
  summary: {
    ar: "طريقة عملية لبناء أساس قوي في HTML.",
    en: "A practical way to build a strong HTML foundation."
  },
  mediaType: "article",
  body: {
    ar: [
      "ابدأ بفهم معنى العناصر وليس حفظها فقط.",
      "اكتب صفحات صغيرة وراجعها على الهاتف والكمبيوتر."
    ],
    en: [
      "Start by understanding what elements mean, not only memorizing them.",
      "Write small pages and review them on mobile and desktop."
    ]
  }
}
```

## Add Materials

1. Upload the file to:
   `media/materials/`
2. Add an item with `type: "materials"` and `mediaType: "download"`.

```js
{
  id: "html-cheatsheet",
  type: "materials",
  date: "2026-05-24",
  duration: "PDF",
  level: "Reference",
  title: {
    ar: "ملخص HTML",
    en: "HTML Cheatsheet"
  },
  summary: {
    ar: "ملف مختصر لأهم عناصر HTML.",
    en: "A short reference for important HTML elements."
  },
  mediaType: "download",
  file: "media/materials/html-cheatsheet.pdf",
  body: {
    ar: ["يمكن تحميل هذا الملف واستخدامه أثناء التدريب."],
    en: ["You can download this file and use it while practicing."]
  }
}
```

## Important Notes for AdSense

- Publish enough original content before applying.
- Keep navigation clear and avoid empty sections.
- Do not place misleading buttons or ask users to click ads.
- Replace `contact@example.com` and placeholder GitHub links before launch.

## Logo

Use the original logo file without redrawing it.

Save the exact logo image as:

`assets/logo.png`
