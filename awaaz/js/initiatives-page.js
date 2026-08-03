import { loadInitiatives } from "./data-api.js";
import { ALL, applyInitiativeFilters } from "./filters.js";
import { renderInitiativeCards } from "./render.js";
import { initNav } from "./nav.js";
import { initReveal } from "./reveal.js";
import { qs, setText } from "./utils.js";

initNav();
initReveal();

const els = {
  category: qs("#initiativeCategorySelect"),
  search: qs("#initiativeSearchInput"),
  reset: qs("#initiativeResetBtn"),
  empty: qs("#initiativeEmptyState"),
  emptyReset: qs("#initiativeEmptyResetBtn"),
  grid: qs("#initiativesGrid"),
  meta: qs("#initiativeResultsMeta"),
};

const state = { category: ALL, q: "" };
let allInitiatives = [];

function render() {
  const filtered = applyInitiativeFilters(allInitiatives, state);
  renderInitiativeCards(els.grid, filtered);

  const catLabel = state.category === ALL ? "All Categories" : state.category;
  setText(els.meta, `${filtered.length} result(s) • ${catLabel}`);

  if (els.empty) els.empty.hidden = filtered.length !== 0;

  requestAnimationFrame(() => highlightFromHash());
}

function resetAll() {
  state.category = ALL;
  state.q = "";
  if (els.category) els.category.value = ALL;
  if (els.search) els.search.value = "";
  render();
}

function wire() {
  els.category?.addEventListener("change", () => {
    state.category = els.category.value;
    render();
  });

  els.search?.addEventListener("input", () => {
    state.q = els.search.value;
    render();
  });

  els.reset?.addEventListener("click", resetAll);
  els.emptyReset?.addEventListener("click", resetAll);

  window.addEventListener("hashchange", () => highlightFromHash());
}

function highlightFromHash() {
  const hash = window.location.hash || "";
  if (!hash.startsWith("#")) return;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  document.querySelectorAll(".highlight").forEach((el) => el.classList.remove("highlight"));
  target.classList.add("highlight");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
}

async function init() {
  try {
    allInitiatives = await loadInitiatives();
    wire();
    render();
  } catch {
    setText(els.meta, "Failed to load data. If you are opening files directly, use a local server (e.g., VS Code Live Server).");
    if (els.empty) els.empty.hidden = true;
  }
}

init();
