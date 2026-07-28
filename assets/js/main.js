// モバイル表示時のナビゲーション開閉を制御します。
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#global-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const next = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(next));
    nav.classList.toggle("is-open", next);
  });
}

const statusLabels = {
  ok: "通常運用",
  maintenance: "メンテナンス",
  incident: "障害発生中",
};

function statusClass(status) {
  if (status === "incident") return "status-incident";
  if (status === "maintenance") return "status-maintenance";
  return "status-ok";
}

// JSONを差し替えるだけでトップのお知らせ一覧を更新できます。
async function renderNews() {
  const list = document.querySelector("#news-list");
  if (!list) return;

  try {
    const response = await fetch("data/news.json");
    const news = await response.json();
    list.innerHTML = news
      .map(
        (item) => `
          <article class="news-item">
            <time datetime="${item.date}">${item.date}</time>
            <a href="${item.url}">${item.title}</a>
          </article>
        `,
      )
      .join("");
  } catch {
    list.textContent = "お知らせを読み込めませんでした。";
  }
}

// 障害情報は status.json の status と entries を変更して運用します。
async function renderStatus() {
  const summary = document.querySelector("#status-summary");
  const detail = document.querySelector("#status-detail");
  if (!summary && !detail) return;

  try {
    const response = await fetch("data/status.json");
    const data = await response.json();
    const label = statusLabels[data.status] || statusLabels.ok;
    const badge = `<span class="status-pill ${statusClass(data.status)}">${label}</span>`;

    if (summary) {
      summary.innerHTML = `${badge}<span>${data.summary}</span>`;
    }

    if (detail) {
      detail.innerHTML = data.entries
        .map(
          (entry) => `
            <article class="status-entry">
              ${badge}
              <h2>${entry.title}</h2>
              <p>${entry.body}</p>
              <time datetime="${entry.updated}">更新日：${entry.updated}</time>
            </article>
          `,
        )
        .join("");
    }
  } catch {
    if (summary) summary.textContent = "障害情報を読み込めませんでした。";
    if (detail) detail.textContent = "障害情報を読み込めませんでした。";
  }
}

renderNews();
renderStatus();
