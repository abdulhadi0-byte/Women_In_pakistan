export async function loadJson(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${path} (${res.status})`);
  return res.json();
}

export async function loadIssues() {
  return loadJson("./data/issues.json");
}

export async function loadInitiatives() {
  return loadJson("./data/initiatives.json");
}
