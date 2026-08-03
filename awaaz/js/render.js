import { clampText, safeUrl } from "./utils.js";

export function clearEl(el) {
  if (!el) return;
  el.innerHTML = "";
}

export function renderIssueCards(gridEl, issues, onOpen) {
  clearEl(gridEl);
  const frag = document.createDocumentFragment();

  issues.forEach((issue) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "card";
    btn.dataset.issueId = issue.id;

    const header = document.createElement("div");
    header.className = "card-header";

    const titleWrap = document.createElement("div");

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = issue.title ?? "";

    const subtitle = document.createElement("p");
    subtitle.className = "card-subtitle";
    subtitle.textContent = `${issue.province ?? ""} • ${issue.city ?? ""}`;

    titleWrap.append(title, subtitle);

    const chip = document.createElement("span");
    chip.className = "chip chip-soft";
    chip.textContent = issue.category ?? "";

    header.append(titleWrap, chip);

    const body = document.createElement("div");
    body.className = "card-body";
    body.textContent = clampText(issue.description ?? "", 140);

    const footer = document.createElement("div");
    footer.className = "card-footer";

    const tag1 = document.createElement("span");
    tag1.className = "tag";
    tag1.textContent = issue.category ?? "";

    const tag2 = document.createElement("span");
    tag2.className = "tag";
    tag2.textContent = issue.province ?? "";

    footer.append(tag1, tag2);

    btn.append(header, body, footer);
    btn.addEventListener("click", () => onOpen?.(issue));
    frag.append(btn);
  });

  gridEl?.append(frag);
}

export function renderInitiativeCards(gridEl, initiatives) {
  clearEl(gridEl);
  const frag = document.createDocumentFragment();

  initiatives.forEach((init) => {
    const card = document.createElement("article");
    card.className = "card";
    card.id = init.id;
    card.tabIndex = 0;

    const header = document.createElement("div");
    header.className = "card-header";

    const titleWrap = document.createElement("div");

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = init.name ?? "";

    const subtitle = document.createElement("p");
    subtitle.className = "card-subtitle";
    subtitle.textContent = `${init.year ?? ""} • ${init.coverage ?? ""}`;

    titleWrap.append(title, subtitle);

    const chip = document.createElement("span");
    chip.className = "chip chip-soft";
    chip.textContent = init.category ?? "";

    header.append(titleWrap, chip);

    const body = document.createElement("div");
    body.className = "card-body";
    body.textContent = clampText(init.description ?? "", 170);

    const footer = document.createElement("div");
    footer.className = "card-footer";

    const link = safeUrl(init.link);
    if (link) {
      const a = document.createElement("a");
      a.className = "link-btn link-btn-primary";
      a.href = link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "Official link";
      footer.append(a);
    }

    const jump = document.createElement("a");
    jump.className = "link-btn";
    jump.href = `./issues.html?initiative=${encodeURIComponent(init.id)}`;
    jump.textContent = "Related issues";
    footer.append(jump);

    card.append(header, body, footer);
    frag.append(card);
  });

  gridEl?.append(frag);
}
