import { qs, safeUrl, setText } from "./utils.js";

export function createIssueModal(initiativesById) {
  const backdrop = qs("#modalBackdrop");
  const closeBtn = qs("#modalCloseBtn");
  const tagCategory = qs("#modalTagCategory");
  const tagRegion = qs("#modalTagRegion");
  const titleEl = qs("#modalTitle");
  const descEl = qs("#modalDescription");
  const statEl = qs("#modalStat");
  const sourceEl = qs("#modalStatSource");
  const initiativeEl = qs("#modalInitiative");

  if (!backdrop || !closeBtn || !titleEl || !initiativeEl) return null;

  let lastFocus = null;

  const close = () => {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus instanceof HTMLElement) lastFocus.focus();
    lastFocus = null;
  };

  const onBackdrop = (e) => {
    if (e.target === backdrop) close();
  };

  const onKey = (e) => {
    if (e.key === "Escape") close();
  };

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", onBackdrop);
  document.addEventListener("keydown", onKey);

  const open = (issue) => {
    lastFocus = document.activeElement;

    setText(tagCategory, issue.category);
    setText(tagRegion, `${issue.province ?? ""} • ${issue.city ?? ""}`);
    setText(titleEl, issue.title);
    setText(descEl, issue.description);
    setText(statEl, issue.stat);
    setText(sourceEl, issue.statSource);

    initiativeEl.innerHTML = "";
    const init = initiativesById.get(issue.relatedInitiativeId);

    const initTitle = document.createElement("h3");
    initTitle.className = "related-title";
    initTitle.textContent = init?.name ? init.name : "No linked initiative yet";

    const initMeta = document.createElement("div");
    initMeta.className = "related-meta";
    initMeta.textContent = init?.year ? `${init.year} • ${init.coverage ?? ""}` : "Add an initiative link for this issue.";

    const initDesc = document.createElement("p");
    initDesc.className = "related-desc";
    initDesc.textContent = init?.description
      ? init.description
      : "Use the initiatives dataset to connect this issue with a real government program or law.";

    const actions = document.createElement("div");
    actions.className = "related-actions";

    const view = document.createElement("a");
    view.className = "link-btn link-btn-primary";
    view.href = init?.id ? `./initiatives.html#${encodeURIComponent(init.id)}` : "./initiatives.html";
    view.textContent = "View in initiatives";
    actions.append(view);

    const link = safeUrl(init?.link);
    if (link) {
      const official = document.createElement("a");
      official.className = "link-btn";
      official.href = link;
      official.target = "_blank";
      official.rel = "noopener noreferrer";
      official.textContent = "Official link";
      actions.append(official);
    }

    initiativeEl.append(initTitle, initMeta, initDesc, actions);

    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };

  return { open, close };
}
