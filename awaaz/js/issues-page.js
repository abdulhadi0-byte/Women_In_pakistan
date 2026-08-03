import { loadIssues, loadInitiatives } from "./data-api.js";
import { ALL, applyIssueFilters, citiesForProvince, uniqueValues } from "./filters.js";
import { renderIssueCards } from "./render.js";
import { initNav } from "./nav.js";
import { initReveal } from "./reveal.js";
import { createIssueModal } from "./modal.js";
import { qs, setText } from "./utils.js";

initNav();
initReveal();

const els = {
  province: qs("#provinceSelect"),
  city: qs("#citySelect"),
  category: qs("#categorySelect"),
  search: qs("#searchInput"),
  reset: qs("#resetBtn"),
  empty: qs("#emptyState"),
  emptyReset: qs("#emptyResetBtn"),
  grid: qs("#issuesGrid"),
  meta: qs("#resultsMeta"),
};

const url = new URL(window.location.href);
const initialInitiativeId = url.searchParams.get("initiative") || "";

const state = {
  province: ALL,
  city: ALL,
  category: ALL,
  q: "",
  initiativeId: initialInitiativeId,
};

let allIssues = [];
let initiativesById = new Map();
let modal = null;

function setCityDisabled(disabled) {
  if (!els.city) return;
  els.city.disabled = disabled;
}

function setSelectOptions(selectEl, options, includeAllLabel) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  const allOpt = document.createElement("option");
  allOpt.value = ALL;
  allOpt.textContent = includeAllLabel;
  selectEl.append(allOpt);
  options.forEach((value) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value;
    selectEl.append(opt);
  });
}

function updateCityOptions() {
  if (!els.city) return;
  const cities = citiesForProvince(allIssues, state.province);
  setSelectOptions(els.city, cities, "All Cities");
  const isAllProvince = state.province === ALL;
  setCityDisabled(isAllProvince);
  if (isAllProvince) {
    state.city = ALL;
    els.city.value = ALL;
  }
}

function applyExtraInitiativeFilter(list) {
  if (!state.initiativeId) return list;
  return list.filter((x) => String(x.relatedInitiativeId) === String(state.initiativeId));
}

function render() {
  const base = applyIssueFilters(allIssues, state);
  const filtered = applyExtraInitiativeFilter(base);

  renderIssueCards(els.grid, filtered, (issue) => modal?.open(issue));

  const provinceLabel = state.province === ALL ? "All Provinces" : state.province;
  const cityLabel = state.city === ALL ? "All Cities" : state.city;
  const catLabel = state.category === ALL ? "All Categories" : state.category;

  const initNote = state.initiativeId ? ` • Linked to: ${state.initiativeId}` : "";
  setText(els.meta, `${filtered.length} result(s) • ${provinceLabel} • ${cityLabel} • ${catLabel}${initNote}`);

  if (els.empty) els.empty.hidden = filtered.length !== 0;
}

function resetAll() {
  state.province = ALL;
  state.city = ALL;
  state.category = ALL;
  state.q = "";
  state.initiativeId = "";

  if (els.province) els.province.value = ALL;
  if (els.category) els.category.value = ALL;
  if (els.search) els.search.value = "";

  updateCityOptions();

  const newUrl = new URL(window.location.href);
  newUrl.searchParams.delete("initiative");
  window.history.replaceState({}, "", newUrl.toString());

  render();
}

function wire() {
  els.province?.addEventListener("change", () => {
    state.province = els.province.value;
    state.city = ALL;
    if (els.city) els.city.value = ALL;
    updateCityOptions();
    render();
  });

  els.city?.addEventListener("change", () => {
    state.city = els.city.value;
    render();
  });

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
}

async function init() {
  try {
    const [issues, initiatives] = await Promise.all([loadIssues(), loadInitiatives()]);
    allIssues = issues;
    initiativesById = new Map((initiatives || []).map((x) => [x.id, x]));
    modal = createIssueModal(initiativesById);

    const provinces = uniqueValues(allIssues, "province");
    setSelectOptions(els.province, provinces, "All Provinces");
    els.province.value = state.province;

    updateCityOptions();

    wire();
    render();

    if (state.initiativeId) {
      const initObj = initiativesById.get(state.initiativeId);
      if (initObj && els.search) els.search.value = "";
    }
  } catch {
    setText(els.meta, "Failed to load data. If you are opening files directly, use a local server (e.g., VS Code Live Server).");
    if (els.empty) els.empty.hidden = true;
  }
}

init();
