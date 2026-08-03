export function qs(selector, root = document) {
  return root.querySelector(selector);
}

export function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

export function clampText(text, maxLen) {
  if (typeof text !== "string") return "";
  if (text.length <= maxLen) return text;
  return `${text.slice(0, Math.max(0, maxLen - 1))}…`;
}

export function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

export function setText(el, value) {
  if (!el) return;
  el.textContent = value ?? "";
}

export function safeUrl(value) {
  try {
    const url = new URL(value);
    return url.toString();
  } catch {
    return "";
  }
}
