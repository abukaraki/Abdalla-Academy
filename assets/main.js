const ui = {
  ar: {
    brandTitle: "Abdalla Academy",
    brandSub: "Learn • Grow • Succeed",
    menu: "القائمة",
    home: "الرئيسية",
    courses: "الدورات",
    software: "البرامج",
    lectures: "المحاضرات",
    articles: "المقالات",
    videos: "الفيديوهات",
    blog: "المدونة",
    materials: "المواد",
    programming: "البرمجة",
    search: "البحث",
    about: "عن المنصة",
    contact: "تواصل",
    privacy: "سياسة الخصوصية",
    terms: "الشروط",
    heroEyebrow: "Abdalla Academy",
    heroTitle: "منصة تعليمية للبرمجة والتقنية",
    heroLead: "",
    startLearning: "ابدأ بالمحاضرات",
    exploreProgramming: "استكشف البرمجة",
    cmsText: "محاضرات ومقالات ومواد جديدة تظهر داخل الأقسام المخصصة لها بطريقة مرتبة وسهلة التصفح.",
    sectionsEyebrow: "الأقسام",
    sectionsTitle: "تصفح المحتوى",
    lecturesDesc: "فيديوهات تعليمية منظمة مع وصف واضح، مستوى الدرس، ومدة المشاهدة.",
    articlesDesc: "مقالات منظمة وواضحة، مبنية على محتوى أصلي ومفيد للمتعلمين.",
    blogDesc: "تحديثات قصيرة وتجارب وملاحظات أسبوعية تساعد المتعلم على المتابعة والاستمرار.",
    materialsDesc: "ملفات PDF وروابط أدوات ومراجع قابلة للتحميل مع وصف يوضح فائدتها.",
    programmingDesc: "مسارات مبسطة في HTML وCSS وJavaScript ومشاريع تدريبية للمبتدئين.",
    latestEyebrow: "الأحدث",
    latestTitle: "آخر الدروس والمواد",
    adsenseTitle: "مصمم ليكون واضحا ومناسبا للمراجعة.",
    adsenseText: "المنصة تتجنب الصفحات الفارغة، الإعلانات المضللة، النوافذ المزعجة، والمحتوى المنسوخ. قبل التقديم، أضف محتوى أصليا أكثر واستبدل بيانات التواصل والرابط الرسمي.",
    footerText: "",
    lecturesPageTitle: "المحاضرات",
    lecturesPageLead: "",
    blogPageTitle: "المدونة",
    blogPageLead: "المدونة تساعد المنصة على البقاء نشطة بمحتوى أصلي وسهل القراءة.",
    materialsPageTitle: "المواد",
    materialsPageLead: "",
    programmingPageTitle: "البرمجة",
    programmingPageLead: "دروس ومشاريع تدريبية تساعد المتعلم على الانتقال من المفهوم إلى التطبيق.",
    readMore: "عرض المحتوى",
    watch: "مشاهدة المحاضرة",
    download: "فتح المادة",
    notFound: "لم يتم العثور على المحتوى المطلوب.",
    back: "العودة",
    searchEmpty: "لا توجد نتائج مطابقة.",
    previous: "السابق",
    next: "التالي",
    page: "صفحة"
  },
  en: {
    brandTitle: "Abdalla Academy",
    brandSub: "Learn • Grow • Succeed",
    menu: "Menu",
    home: "Home",
    courses: "Courses",
    software: "Software",
    lectures: "Lectures",
    articles: "Articles",
    videos: "Videos",
    blog: "Blog",
    materials: "Materials",
    programming: "Programming",
    search: "Search",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms",
    heroEyebrow: "Abdalla Academy",
    heroTitle: "Educational Platform for Programming and Technology",
    heroLead: "",
    startLearning: "Start With Lectures",
    exploreProgramming: "Explore Programming",
    cmsText: "New lectures, articles, and materials appear inside their sections in a structured and easy-to-browse way.",
    sectionsEyebrow: "Sections",
    sectionsTitle: "Browse Content",
    lecturesDesc: "Organized educational videos with clear descriptions, lesson level, and viewing time.",
    articlesDesc: "Structured, useful articles built around original educational content.",
    blogDesc: "Short updates, experiments, and weekly notes that keep the platform active.",
    materialsDesc: "PDF files, tool links, and downloadable references with clear descriptions.",
    programmingDesc: "Simple HTML, CSS, and JavaScript tracks with practical projects for beginners.",
    latestEyebrow: "Latest",
    latestTitle: "Latest Lessons and Materials",
    adsenseTitle: "Designed to be clear and review-friendly.",
    adsenseText: "The platform avoids empty pages, misleading ads, intrusive popups, and copied content. Before applying, add more original content and replace the official contact details and URL.",
    footerText: "",
    lecturesPageTitle: "Lectures",
    lecturesPageLead: "",
    blogPageTitle: "Blog",
    blogPageLead: "The blog keeps the platform active with original and readable content.",
    materialsPageTitle: "Materials",
    materialsPageLead: "",
    programmingPageTitle: "Programming",
    programmingPageLead: "Lessons and training projects that help learners move from concept to application.",
    readMore: "Open Content",
    watch: "Watch Lecture",
    download: "Open Material",
    notFound: "The requested content was not found.",
    back: "Back",
    searchEmpty: "No matching results.",
    previous: "Previous",
    next: "Next",
    page: "Page"
  }
};

const content = window.SITE_CONTENT?.items || [];
const pageSize = 4;
const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector("#site-menu");
const languageButton = document.querySelector(".language-toggle");
let currentLang = localStorage.getItem("academy-language") || "ar";

function text(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[currentLang] || value.ar || value.en || "";
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("academy-language", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  if (languageButton) languageButton.textContent = lang === "ar" ? "EN" : "AR";
  document.querySelectorAll(".brand-mark").forEach((node) => {
    const logo = document.createElement("img");
    logo.className = "brand-logo";
    logo.src = "assets/logo.png";
    logo.alt = "Abdalla Abu Karaki logo";
    logo.onerror = () => logo.remove();
    node.replaceWith(logo);
  });

  document.querySelectorAll("[data-text]").forEach((node) => {
    const key = node.getAttribute("data-text");
    if (ui[lang][key]) node.textContent = ui[lang][key];
  });

  document.querySelectorAll(".brand small").forEach((node) => {
    node.textContent = "Learn • Grow • Succeed";
  });

  document.querySelectorAll(".site-footer [data-text='footerText']").forEach((node) => {
    node.remove();
  });

  document.querySelectorAll(".page-hero .lead").forEach((node) => {
    if (!node.closest(".privacy-page") && !node.closest(".terms-page") && !node.closest(".contact-page")) {
      node.remove();
    }
  });

  renderAll();
}

function cardAction(item) {
  if (item.type === "lectures") return ui[currentLang].watch;
  if (item.type === "materials") return ui[currentLang].download;
  return ui[currentLang].readMore;
}

function makeCard(item) {
  const article = document.createElement("article");
  article.className = "content-card";
  const image = item.thumbnail || item.images?.[0]?.src || item.icon || "";
  const media = image ? `<a class="content-media" href="content.html?id=${encodeURIComponent(item.id)}"><img src="${image}" alt="${text(item.title)}" loading="lazy"></a>` : "";
  const icon = item.icon ? `<img class="content-icon" src="${item.icon}" alt="" loading="lazy">` : "";
  const course = item.course ? `<span>${text(item.course)}</span>` : "";
  article.innerHTML = `
    ${media}
    <div class="card-meta">
      ${icon}
      ${course}
      <span>${item.date}</span>
      <span>${item.duration || ""}</span>
      <span>${item.level || ""}</span>
    </div>
    <h2><a href="content.html?id=${encodeURIComponent(item.id)}">${text(item.title)}</a></h2>
    <a class="button small" href="content.html?id=${encodeURIComponent(item.id)}">${cardAction(item)}</a>
  `;
  return article;
}

function currentPage(root) {
  return Math.max(1, Number(root.dataset.page || new URLSearchParams(window.location.search).get("page") || 1));
}

function setPage(root, page) {
  root.dataset.page = String(page);
  const params = new URLSearchParams(window.location.search);
  if (page > 1) params.set("page", String(page));
  else params.delete("page");
  const query = params.toString();
  window.history.replaceState({}, "", `${window.location.pathname}${query ? `?${query}` : ""}`);
}

function removePager(root) {
  const next = root.nextElementSibling;
  if (next?.classList.contains("pager")) next.remove();
}

function renderPager(root, totalItems) {
  removePager(root);
  const totalPages = Math.ceil(totalItems / pageSize);
  if (totalPages <= 1) return;

  const page = Math.min(currentPage(root), totalPages);
  const pager = document.createElement("nav");
  pager.className = "pager";
  pager.setAttribute("aria-label", "Pagination");

  const makeButton = (label, targetPage, isActive = false, disabled = false) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = disabled;
    if (isActive) button.setAttribute("aria-current", "page");
    button.addEventListener("click", () => {
      setPage(root, targetPage);
      renderAll();
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return button;
  };

  pager.appendChild(makeButton(ui[currentLang].previous, Math.max(1, page - 1), false, page === 1));
  for (let index = 1; index <= totalPages; index += 1) {
    pager.appendChild(makeButton(`${ui[currentLang].page} ${index}`, index, index === page));
  }
  pager.appendChild(makeButton(ui[currentLang].next, Math.min(totalPages, page + 1), false, page === totalPages));
  root.insertAdjacentElement("afterend", pager);
}

function renderPagedItems(root, items) {
  root.innerHTML = "";
  if (!items.length) {
    removePager(root);
    root.innerHTML = `<p class="empty-state">${ui[currentLang].searchEmpty}</p>`;
    return;
  }

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const page = Math.min(currentPage(root), totalPages);
  root.dataset.page = String(page);
  const start = (page - 1) * pageSize;
  items.slice(start, start + pageSize).forEach((item) => root.appendChild(makeCard(item)));
  renderPager(root, items.length);
}

function renderCollection(type, root) {
  const search = document.querySelector("[data-search]");
  const query = (search?.value || "").trim().toLowerCase();
  const byType = (item) => {
    if (type === "courses") return Boolean(item.course);
    if (type === "software") return item.category === "software" || item.tags?.includes("software");
    if (type === "videos") return item.mediaType === "video" || item.type === "lectures";
    return item.type === type;
  };
  const items = content
    .filter(byType)
    .filter((item) => `${text(item.title)} ${text(item.summary)}`.toLowerCase().includes(query));

  renderPagedItems(root, items);
}

function renderLatest(root) {
  removePager(root);
  root.innerHTML = "";
  content
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4)
    .forEach((item) => root.appendChild(makeCard(item)));
}

function renderSearch(root) {
  const params = new URLSearchParams(window.location.search);
  const urlQuery = params.get("q") || "";
  const search = document.querySelector("[data-search]");
  if (search && !search.value) search.value = urlQuery;
  const query = (search?.value || urlQuery).trim().toLowerCase();

  const source = content.slice().sort((a, b) => b.date.localeCompare(a.date));
  const items = query
    ? source.filter((item) => `${text(item.title)} ${text(item.summary)} ${item.type}`.toLowerCase().includes(query))
    : source;

  if (!items.length) {
    removePager(root);
    root.innerHTML = "";
    root.innerHTML = `<p class="empty-state">${ui[currentLang].searchEmpty}</p>`;
    return;
  }
  renderPagedItems(root, items);
}

function renderDetail(root) {
  const id = new URLSearchParams(window.location.search).get("id");
  const item = content.find((entry) => entry.id === id);
  if (!item) {
    root.innerHTML = `<section class="page-hero"><h1>${ui[currentLang].notFound}</h1><a class="button secondary" href="index.html">${ui[currentLang].back}</a></section>`;
    return;
  }

  const body = (text(item.body) || []).map((paragraph) => `<p>${paragraph}</p>`).join("");
  let media = item.icon ? `<img class="detail-icon" src="${item.icon}" alt="" loading="lazy">` : "";
  if (item.mediaType === "video" && item.video) {
    const isExternal = /^https?:/.test(item.video);
    media = isExternal
      ? `<div class="video-embed"><iframe src="${item.video}" title="${text(item.title)}" allowfullscreen loading="lazy"></iframe></div>`
      : `<video class="video-player" controls preload="metadata"><source src="${item.video}" type="video/mp4"></video>`;
  }
  if (item.mediaType === "download" && item.file) {
    media += `<a class="button primary" href="${item.file}">${ui[currentLang].download}</a>`;
  }
  if (item.sourceUrl) {
    media += `<p><a href="${item.sourceUrl}" rel="noopener" target="_blank">${currentLang === "ar" ? "المصدر الرسمي" : "Official source"}</a></p>`;
  }
  if (item.downloadUrl) {
    media += `<p><a class="button primary" href="${item.downloadUrl}" rel="noopener" target="_blank">${currentLang === "ar" ? "تحميل XAMPP من الموقع الرسمي" : "Download XAMPP from the official site"}</a></p>`;
  }
  if (item.images?.length) {
    media += `<div class="lesson-gallery">${item.images.map((image, imageIndex) => `
      <figure style="--delay:${Math.min(imageIndex, 14) * 55}ms">
        <button class="annotated-image image-zoom" type="button" aria-label="${currentLang === "ar" ? "تكبير الصورة" : "Enlarge image"}">
          <img src="${image.src}" alt="${text(image.caption)}" loading="lazy">
          ${(image.annotations || []).map((annotation, index) => `
            <span class="annotation-box" style="left:${annotation.x}%;top:${annotation.y}%;width:${annotation.w}%;height:${annotation.h}%;">${index + 1}</span>
          `).join("")}
        </button>
        <div class="annotation-copy">
          <figcaption>${text(image.caption)}</figcaption>
          ${image.description ? `<p class="annotation-description">${text(image.description)}</p>` : ""}
          ${image.annotations?.length ? `<ol class="annotation-list">${image.annotations.map((annotation, index) => `<li><strong>${index + 1}</strong> ${text(annotation.label)}</li>`).join("")}</ol>` : ""}
        </div>
      </figure>
    `).join("")}</div>`;
  }
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(text(item.title));
  media += `<div class="share-box" aria-label="Share lesson">
    <strong>${currentLang === "ar" ? "مشاركة الدرس" : "Share this lesson"}</strong>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener">Facebook</a>
    <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}" target="_blank" rel="noopener">X</a>
    <a href="https://wa.me/?text=${shareTitle}%20${shareUrl}" target="_blank" rel="noopener">WhatsApp</a>
  </div>`;

  root.innerHTML = `
    <section class="page-hero">
      <p class="eyebrow">${ui[currentLang][item.type] || item.type}</p>
      <h1>${text(item.title)}</h1>
      <p class="lead">${text(item.summary)}</p>
      <div class="card-meta detail-meta"><span>${item.date}</span><span>${item.duration || ""}</span><span>${item.level || ""}</span></div>
    </section>
    <article class="prose detail-body">
      ${media}
      ${body}
    </article>
  `;
  document.title = `${text(item.title)} | Abdalla Academy`;
}

function renderStats() {
  document.querySelectorAll("[data-count]").forEach((node) => {
    const type = node.getAttribute("data-count");
    const count = content.filter((item) => {
      if (type === "courses") return Boolean(item.course);
      if (type === "software") return item.category === "software" || item.tags?.includes("software");
      if (type === "videos") return item.mediaType === "video" || item.type === "lectures";
      return item.type === type;
    }).length;
    node.textContent = String(count);
  });
}

function injectJsonLd(id, data) {
  let script = document.querySelector(`script[data-jsonld="${id}"]`);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-jsonld", id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function updateStructuredData() {
  const page = document.body.getAttribute("data-page") || window.location.pathname.split("/").pop().replace(".html", "") || "home";
  const base = "https://abukaraki.github.io/Abdalla-Academy/";
  const pageName = document.title.replace(" | Abdalla Academy", "");

  injectJsonLd("breadcrumbs", {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": currentLang === "ar" ? "الرئيسية" : "Home",
        "item": base
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": window.location.href
      }
    ]
  });

  const renderedItems = document.querySelector("[data-render]");
  if (renderedItems && renderedItems.getAttribute("data-render") !== "detail") {
    injectJsonLd("item-list", {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": pageName,
      "itemListElement": content.slice(0, 10).map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${base}content.html?id=${encodeURIComponent(item.id)}`,
        "name": text(item.title)
      }))
    });
  }

  if (page === "content") {
    const id = new URLSearchParams(window.location.search).get("id");
    const item = content.find((entry) => entry.id === id);
    if (item) {
      const isVideo = item.type === "lectures";
      injectJsonLd("content-item", {
        "@context": "https://schema.org",
        "@type": isVideo ? "VideoObject" : "Article",
        "name": text(item.title),
        "headline": text(item.title),
        "description": text(item.summary),
        "datePublished": item.date,
        "uploadDate": item.date,
        "inLanguage": currentLang,
        "author": {
          "@type": "Person",
          "name": "Abdalla Abukaraki"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Abdalla Academy"
        }
      });
    }
  }
}

function renderAll() {
  document.querySelectorAll("[data-render]").forEach((root) => {
    const target = root.getAttribute("data-render");
    if (target === "latest") renderLatest(root);
    else if (target === "detail") renderDetail(root);
    else if (target === "search") renderSearch(root);
    else renderCollection(target, root);
  });
  renderStats();
  updateStructuredData();
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open", !expanded);
  });
}

if (languageButton) {
  languageButton.addEventListener("click", () => {
    setLanguage(currentLang === "ar" ? "en" : "ar");
  });
}

document.querySelectorAll("[data-search]").forEach((input) => {
  input.addEventListener("input", () => {
    document.querySelectorAll("[data-render]").forEach((root) => {
      root.dataset.page = "1";
    });
    if (document.querySelector("[data-render='search']")) {
      const params = new URLSearchParams(window.location.search);
      const value = input.value.trim();
      if (value) params.set("q", value);
      else params.delete("q");
      params.delete("page");
      const query = params.toString();
      window.history.replaceState({}, "", `${window.location.pathname}${query ? `?${query}` : ""}`);
    }
    renderAll();
  });
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".image-zoom");
  if (!trigger) return;

  const figure = trigger.closest("figure");
  const modal = document.createElement("div");
  modal.className = "image-lightbox";
  modal.innerHTML = `
    <div class="image-lightbox-panel" role="dialog" aria-modal="true" aria-label="${currentLang === "ar" ? "عرض الصورة" : "Image preview"}">
      <button class="image-lightbox-close" type="button" aria-label="${currentLang === "ar" ? "إغلاق" : "Close"}">×</button>
      <div class="image-lightbox-media"></div>
      <p>${figure?.querySelector("figcaption")?.textContent || ""}</p>
    </div>
  `;
  const media = modal.querySelector(".image-lightbox-media");
  const clone = trigger.cloneNode(true);
  clone.classList.remove("image-zoom");
  clone.removeAttribute("aria-label");
  clone.setAttribute("tabindex", "-1");
  media.appendChild(clone);
  document.body.appendChild(modal);
  document.body.classList.add("has-lightbox");

  const close = () => {
    modal.remove();
    document.body.classList.remove("has-lightbox");
    document.removeEventListener("keydown", onKeydown);
  };
  const onKeydown = (keydownEvent) => {
    if (keydownEvent.key === "Escape") close();
  };

  modal.addEventListener("click", (clickEvent) => {
    if (clickEvent.target === modal || clickEvent.target.closest(".image-lightbox-close")) close();
  });
  document.addEventListener("keydown", onKeydown);
  modal.querySelector(".image-lightbox-close").focus();
});

setLanguage(currentLang);
