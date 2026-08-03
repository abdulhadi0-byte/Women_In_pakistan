import { qs } from "./utils.js";

export function initNav() {
  const toggle = qs(".nav-toggle");
  const nav = qs("#siteNav");
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openNav = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) closeNav();
    else openNav();
  });

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (nav.contains(target) || toggle.contains(target)) return;
    closeNav();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!nav.classList.contains("is-open")) return;
    closeNav();
  });

  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.matches("a")) closeNav();
  });
}
