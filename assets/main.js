const ui = {
  ar: {
    brandTitle: "Abdalla Academy",
    brandSub: "Learn • Grow • Succeed",
    menu: "القائمة",
    home: "الرئيسية",
    lectures: "المحاضرات",
    articles: "المقالات",
    blog: "المدونة",
    materials: "المواد",
    programming: "البرمجة",
    search: "البحث",
    about: "عن المنصة",
    contact: "تواصل",
    privacy: "سياسة الخصوصية",
    terms: "الشروط",
    heroEyebrow: "Abdalla Abu Karaki",
    heroTitle: "Learn. Grow. Succeed.",
    heroLead: "",
    startLearning: "ابدأ بالمحاضرات",
    exploreProgramming: "استكشف البرمجة",
    cmsTitle: "محتوى تعليمي متجدد",
    cmsText: "محاضرات ومقالات ومواد جديدة تظهر داخل الأقسام المخصصة لها بطريقة مرتبة وسهلة التصفح.",
    sectionsEyebrow: "أقسام المنصة",
    sectionsTitle: "الأقسام",
    lecturesDesc: "فيديوهات تعليمية منظمة مع وصف واضح، مستوى الدرس، ومدة المشاهدة.",
    articlesDesc: "مقالات منظمة وواضحة، مبنية على محتوى أصلي ومفيد للمتعلمين.",
    blogDesc: "تحديثات قصيرة وتجارب وملاحظات أسبوعية تساعد المتعلم على المتابعة والاستمرار.",
    materialsDesc: "ملفات PDF وروابط أدوات ومراجع قابلة للتحميل مع وصف يوضح فائدتها.",
    programmingDesc: "مسارات مبسطة في HTML وCSS وJavaScript ومشاريع تدريبية للمبتدئين.",
    latestEyebrow: "أحدث المحتوى",
    latestTitle: "الأحدث",
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
    lectures: "Lectures",
    articles: "Articles",
    blog: "Blog",
    materials: "Materials",
    programming: "Programming",
    search: "Search",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms",
    heroEyebrow: "Abdalla Abu Karaki",
    heroTitle: "Learn. Grow. Succeed.",
    heroLead: "",
    startLearning: "Start With Lectures",
    exploreProgramming: "Explore Programming",
    cmsTitle: "Fresh educational content",
    cmsText: "New lectures, articles, and materials appear inside their sections in a structured and easy-to-browse way.",
    sectionsEyebrow: "Platform sections",
    sectionsTitle: "Everything is organized by content type.",
    lecturesDesc: "Organized educational videos with clear descriptions, lesson level, and viewing time.",
    articlesDesc: "Structured, useful articles built around original educational content.",
    blogDesc: "Short updates, experiments, and weekly notes that keep the platform active.",
    materialsDesc: "PDF files, tool links, and downloadable references with clear descriptions.",
    programmingDesc: "Simple HTML, CSS, and JavaScript tracks with practical projects for beginners.",
    latestEyebrow: "Latest content",
    latestTitle: "Latest",
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
    if (!node.closest(".privacy-page") && !node.closest(".terms-page")) {
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
  const icon = item.icon ? `<img class="content-icon" src="${item.icon}" alt="" loading="lazy">` : "";
  const course = item.course ? `<span>${text(item.course)}</span>` : "";
  article.innerHTML = `
    ${icon}
    <div class="card-meta">
      ${course}
      <span>${item.date}</span>
      <span>${item.duration || ""}</span>
      <span>${item.level || ""}</span>
    </div>
    <h2>${text(item.title)}</h2>
    <p>${text(item.summary)}</p>
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
  const items = content
    .filter((item) => item.type === type)
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
    media += `<p><a href="${item.sourceUrl}" rel="noopener" target="_blank">Apache Friends XAMPP</a></p>`;
  }

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
    node.textContent = content.filter((item) => item.type === type).length;
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
  const base = "https://username.github.io/site-name/";
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

setLanguage(currentLang);
