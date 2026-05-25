import { formatItemTitle, loadContent, localPathExists } from "./content-tools.mjs";

const allowedTypes = new Set([
  "course",
  "software",
  "lectures",
  "programming",
  "articles",
  "blog",
  "materials"
]);

const errors = [];
const warnings = [];
const seenIds = new Set();
const items = loadContent();

function addError(item, message) {
  errors.push(`${item?.id || "missing-id"}: ${message}`);
}

function addWarning(item, message) {
  warnings.push(`${item?.id || "missing-id"}: ${message}`);
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasLocalizedText(value) {
  return value && hasText(value.ar) && hasText(value.en);
}

function checkLocalPath(item, key, value, required = false) {
  if (!value) {
    if (required) addError(item, `missing ${key}`);
    return;
  }

  if (!localPathExists(value)) {
    addError(item, `${key} file does not exist: ${value}`);
  }
}

for (const item of items) {
  if (!hasText(item.id)) {
    addError(item, "missing id");
    continue;
  }

  if (!/^[a-z0-9-]+$/.test(item.id)) {
    addError(item, "id must use lowercase letters, numbers, and dashes only");
  }

  if (seenIds.has(item.id)) {
    addError(item, "duplicate id");
  }
  seenIds.add(item.id);

  if (!allowedTypes.has(item.type)) {
    addError(item, `unsupported type: ${item.type}`);
  }

  if (!hasLocalizedText(item.title)) {
    addError(item, "title must include ar and en text");
  }

  if (!hasLocalizedText(item.summary)) {
    addError(item, "summary must include ar and en text");
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(item.date || ""))) {
    addError(item, "date must use YYYY-MM-DD");
  }

  if (!item.mediaType) {
    addWarning(item, "mediaType is empty");
  }

  checkLocalPath(item, "thumbnail", item.thumbnail);
  checkLocalPath(item, "icon", item.icon);
  checkLocalPath(item, "video", item.video, item.mediaType === "video");
  checkLocalPath(item, "file", item.file, item.mediaType === "download");

  if (Array.isArray(item.images)) {
    item.images.forEach((image, index) => {
      checkLocalPath(item, `images[${index}].src`, image?.src, true);
    });
  }

  if (item.type === "course") {
    if (!Array.isArray(item.playlist) || item.playlist.length === 0) {
      addError(item, "course must include a non-empty playlist");
    } else {
      item.playlist.forEach((lesson, index) => {
        if (!hasLocalizedText(lesson.title)) {
          addError(item, `playlist[${index}] title must include ar and en text`);
        }
        if (!hasLocalizedText(lesson.summary)) {
          addWarning(item, `playlist[${index}] summary should include ar and en text`);
        }
      });
    }
  }

  if (!item.body) {
    addWarning(item, `${formatItemTitle(item)} has no body content`);
  }
}

if (warnings.length) {
  console.log("Content warnings:");
  warnings.forEach((warning) => console.log(`- ${warning}`));
  console.log("");
}

if (errors.length) {
  console.error("Content validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

const counts = items.reduce((result, item) => {
  result[item.type] = (result[item.type] || 0) + 1;
  return result;
}, {});

console.log(`Content validation passed: ${items.length} items.`);
console.log(JSON.stringify(counts, null, 2));

