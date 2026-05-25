import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

export const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const contentFile = path.join(rootDir, "assets", "content.js");

export function loadContent() {
  const source = fs.readFileSync(contentFile, "utf8");
  const sandbox = { window: {} };

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: contentFile });

  const items = sandbox.window?.SITE_CONTENT?.items;

  if (!Array.isArray(items)) {
    throw new Error("assets/content.js must define window.SITE_CONTENT.items as an array.");
  }

  return items;
}

export function isExternalPath(value) {
  return /^https?:\/\//i.test(String(value || ""));
}

export function localPathExists(value) {
  if (!value || isExternalPath(value)) return true;
  return fs.existsSync(path.join(rootDir, value));
}

export function formatItemTitle(item) {
  return item?.title?.en || item?.title?.ar || item?.id || "unknown item";
}

