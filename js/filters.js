import { normalize } from "./utils.js";

export const ALL = "__all__";

export function uniqueValues(items, key) {
  const set = new Set();
  items.forEach((item) => set.add(String(item?.[key] ?? "").trim()));
  return Array.from(set).filter(Boolean).sort((a, b) => a.localeCompare(b));
}

export function citiesForProvince(issues, province) {
  if (!province || province === ALL) return uniqueValues(issues, "city");
  return uniqueValues(
    issues.filter((x) => String(x.province) === String(province)),
    "city"
  );
}

export function applyIssueFilters(issues, state) {
  const province = state.province ?? ALL;
  const city = state.city ?? ALL;
  const category = state.category ?? ALL;
  const q = normalize(state.q ?? "");

  return issues.filter((issue) => {
    if (province !== ALL && String(issue.province) !== String(province)) return false;
    if (city !== ALL && String(issue.city) !== String(city)) return false;
    if (category !== ALL && String(issue.category) !== String(category)) return false;
    if (q) {
      const hay = `${issue.title ?? ""} ${issue.description ?? ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function applyInitiativeFilters(initiatives, state) {
  const category = state.category ?? ALL;
  const q = normalize(state.q ?? "");

  return initiatives.filter((init) => {
    if (category !== ALL && String(init.category) !== String(category)) return false;
    if (q) {
      const hay = `${init.name ?? ""} ${init.description ?? ""} ${init.coverage ?? ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}
