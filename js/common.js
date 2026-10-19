// Shared code for every page: header, footer, phone action bar, contact details and product art.

const ICONS = {
  phone:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  pin:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  menu:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  whatsapp:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/><path d="M16.6 14.2c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/></svg>',
};

const PAGES = [
  { href: "index.html", label: "Home", name: "home" },
  { href: "products.html", label: "Products", name: "products" },
  { href: "about.html", label: "About", name: "about" },
  { href: "contact.html", label: "Contact", name: "contact" },
];

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function primaryPhone() {
  return BUSINESS.phones[0];
}

function phoneLink(phone) {
  return `<a href="tel:${escapeHtml(phone.number)}">${escapeHtml(phone.display)}</a>`;
}

function whatsappLink(message) {
  const base = "https://wa.me/" + BUSINESS.whatsappNumber;
  return message ? base + "?text=" + encodeURIComponent(message) : base;
}

function addressHtml() {
  const a = BUSINESS.address;
  return [...a.lines, a.area, `${a.city} - ${a.pin}, ${a.state}`].map(escapeHtml).join("<br>");
}

function brandHtml(light) {
  return `<a class="brand${light ? " brand-light" : ""}" href="index.html">
    <img src="images/favicon.svg" alt="" width="44" height="44">
    <span class="brand-text">
      <span class="brand-name">${escapeHtml(BUSINESS.name)}</span>
      <span class="brand-sub">Brushes, rollers &amp; tools</span>
    </span>
  </a>`;
}

function renderHeader(page) {
  const links = PAGES.map(
    (p) => `<a href="${p.href}"${page === p.name ? ' aria-current="page"' : ""}>${p.label}</a>`
  ).join("");
  const phone = primaryPhone();
  const header = document.getElementById("site-header");
  header.innerHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <span class="topbar-note">${escapeHtml(BUSINESS.tagline)}</span>
        <span class="topbar-links">
          <a href="tel:${escapeHtml(phone.number)}">${ICONS.phone}${escapeHtml(phone.display)}</a>
          <a href="mailto:${escapeHtml(BUSINESS.email)}">${ICONS.mail}${escapeHtml(BUSINESS.email)}</a>
        </span>
      </div>
    </div>
    <div class="container header-inner">
      ${brandHtml(false)}
      <a class="button button-small header-call" href="tel:${escapeHtml(phone.number)}">${ICONS.phone}Call</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">${ICONS.menu}</button>
      <nav class="nav" id="site-nav" aria-label="Main">
        ${links}
        <a class="button button-small nav-cta" href="tel:${escapeHtml(phone.number)}">${ICONS.phone}Call now</a>
      </nav>
    </div>`;

  const toggle = header.querySelector(".nav-toggle");
  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = open ? ICONS.close : ICONS.menu;
  };
  toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

function renderFooter() {
  const links = PAGES.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join("");
  const phones = BUSINESS.phones.map((p) => `<li>${phoneLink(p)}</li>`).join("");
  document.getElementById("site-footer").innerHTML = `
    <div class="container footer-inner">
      <div class="footer-brand">
        ${brandHtml(true)}
        <p>Brushes, paint rollers, papers and painting tools for painters, contractors, shops and homes in Surat.</p>
      </div>
      <div>
        <p class="footer-heading">Pages</p>
        <ul>${links}</ul>
      </div>
      <div>
        <p class="footer-heading">Visit us</p>
        <p>${addressHtml()}</p>
        <p>${escapeHtml(BUSINESS.hours)}</p>
        <p><a href="${escapeHtml(BUSINESS.mapLink)}" target="_blank" rel="noopener">Open in Google Maps</a></p>
      </div>
      <div>
        <p class="footer-heading">Call or email</p>
        <ul>
          ${phones}
          <li><a href="mailto:${escapeHtml(BUSINESS.email)}">${escapeHtml(BUSINESS.email)}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© ${new Date().getFullYear()} ${escapeHtml(BUSINESS.name)}, ${escapeHtml(BUSINESS.address.city)}. All rights reserved.</p>
      </div>
    </div>`;
}

// Fills elements marked with data-* attributes from BUSINESS, so contact details live in one place:
//   data-call        call link to the first phone (text filled in if the element is empty)
//   data-email       email link (text filled in if the element is empty)
//   data-address     the full address
//   data-hours       opening hours
//   data-map-link    link to the Google Maps listing
//   data-map-embed   iframe that shows the map
//   data-whatsapp    WhatsApp link with the attribute's value as the message; hidden if no number is set
function fillContactDetails() {
  const phone = primaryPhone();
  document.querySelectorAll("[data-call]").forEach((el) => {
    el.href = "tel:" + phone.number;
    if (!el.textContent.trim()) el.textContent = phone.display;
  });
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.href = "mailto:" + BUSINESS.email;
    if (!el.textContent.trim()) el.textContent = BUSINESS.email;
  });
  document.querySelectorAll("[data-address]").forEach((el) => {
    el.innerHTML = addressHtml();
  });
  document.querySelectorAll("[data-hours]").forEach((el) => {
    el.textContent = BUSINESS.hours;
  });
  document.querySelectorAll("[data-map-link]").forEach((el) => {
    el.href = BUSINESS.mapLink;
  });
  document.querySelectorAll("[data-map-embed]").forEach((el) => {
    el.src = BUSINESS.mapEmbed;
  });
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    if (BUSINESS.whatsappNumber) el.href = whatsappLink(el.dataset.whatsapp);
    else el.hidden = true;
  });
}

// Bottom bar on phones: Call first, then WhatsApp and Email (D-014).
function renderActionBar() {
  const phone = primaryPhone();
  const bar = document.createElement("div");
  bar.className = "action-bar";
  bar.innerHTML =
    `<a class="action-call" href="tel:${escapeHtml(phone.number)}">${ICONS.phone}Call</a>` +
    (BUSINESS.whatsappNumber
      ? `<a class="action-wa" href="${whatsappLink("Hi " + BUSINESS.name + ", I have an inquiry.")}">${ICONS.whatsapp}WhatsApp</a>`
      : "") +
    `<a class="action-mail" href="mailto:${escapeHtml(BUSINESS.email)}">${ICONS.mail}Email</a>`;
  document.body.appendChild(bar);
}

// ---------- Product art ----------
// Simple drawings of each item, shown until a real photo is added. To use a photo, replace the
// <div class="art" data-art="..."> in the page with <img class="art" src="images/..." alt="...">.

const ROLLERS = {
  "yellow-line": { fill: "#f4c20d", dark: "#b88a00", look: "lines" },
  "brown-line": { fill: "#a8703f", dark: "#6e4423", look: "lines" },
  "green-thread": { fill: "#2f9e5b", dark: "#1d6b3c", look: "thread" },
  epoxy: { fill: "#e3e7ec", dark: "#9aa3ae", look: "plain" },
  "yellow-texture": { fill: "#f4c20d", dark: "#b88a00", look: "dots" },
};

const BRUSHES = {
  pu: { bristle: "#f3ead2", handle: "#f26a1b" },
  deluxe: { bristle: "#d9c7a0", handle: "#2b2b2b" },
  jyoti: { bristle: "#ffffff", handle: "#c24a06" },
};

const PAPERS = {
  water: { fill: "#5b6676", dark: "#3d4552" },
  brown: { fill: "#c08a52", dark: "#8a5d2e" },
  grit: { fill: "#d8d2c4", dark: "#a69f8e" },
};

let artCount = 0;

function artSvg(spec) {
  const [kind, variant] = spec.split(":");
  const id = "art" + artCount++;
  const back = '<circle cx="100" cy="75" r="62" fill="#fff1e6"/>';
  let body = "";

  if (kind === "roller") {
    const r = ROLLERS[variant] || ROLLERS.epoxy;
    let overlay = "";
    if (r.look === "lines") {
      overlay = `<rect x="30" y="44" width="118" height="4" fill="${r.dark}"/><rect x="30" y="54" width="118" height="4" fill="${r.dark}"/>`;
    } else if (r.look === "thread") {
      overlay = `<pattern id="${id}" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="9" stroke="${r.dark}" stroke-width="3"/></pattern><rect x="30" y="28" width="118" height="44" rx="12" fill="url(#${id})"/>`;
    } else if (r.look === "dots") {
      overlay = `<pattern id="${id}" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="2" fill="${r.dark}"/></pattern><rect x="30" y="28" width="118" height="44" rx="12" fill="url(#${id})"/>`;
    }
    body =
      `<path d="M148 50H164V88H100V104" fill="none" stroke="#4a4a4a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>` +
      `<rect x="91" y="102" width="18" height="38" rx="6" fill="#f26a1b"/>` +
      `<rect x="30" y="28" width="118" height="44" rx="12" fill="${r.fill}"/>${overlay}` +
      `<rect x="40" y="33" width="98" height="6" rx="3" fill="#fff" opacity=".4"/>`;
  } else if (kind === "brush") {
    const b = BRUSHES[variant] || BRUSHES.pu;
    body =
      `<rect x="22" y="46" width="48" height="58" rx="8" fill="${b.bristle}" stroke="#00000018"/>` +
      `<path d="M34 52v46M46 52v46M58 52v46" stroke="#00000020" stroke-width="2"/>` +
      `<rect x="66" y="42" width="30" height="66" rx="4" fill="#b9bec7"/>` +
      `<path d="M66 62H96M66 88H96" stroke="#8a919c" stroke-width="2"/>` +
      `<rect x="94" y="60" width="86" height="30" rx="15" fill="${b.handle}"/>` +
      `<rect x="106" y="66" width="48" height="5" rx="2.5" fill="#fff" opacity=".35"/>`;
  } else if (kind === "paper") {
    const p = PAPERS[variant] || PAPERS.grit;
    body =
      `<pattern id="${id}" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="${p.dark}"/><circle cx="6" cy="6" r="1.1" fill="${p.dark}"/></pattern>` +
      `<rect x="64" y="22" width="92" height="100" rx="4" fill="${p.dark}" opacity=".55"/>` +
      `<rect x="54" y="30" width="92" height="100" rx="4" fill="${p.dark}" opacity=".8"/>` +
      `<rect x="44" y="38" width="92" height="100" rx="4" fill="${p.fill}"/>` +
      `<rect x="44" y="38" width="92" height="100" rx="4" fill="url(#${id})"/>`;
  } else if (kind === "can") {
    body =
      `<rect x="78" y="16" width="44" height="30" rx="6" fill="#2b2b2b"/><rect x="92" y="8" width="16" height="10" rx="3" fill="#555"/>` +
      `<rect x="70" y="44" width="60" height="94" rx="10" fill="#f26a1b"/>` +
      `<rect x="70" y="72" width="60" height="30" fill="#fff"/><rect x="80" y="82" width="40" height="5" rx="2.5" fill="#f26a1b"/><rect x="86" y="92" width="28" height="4" rx="2" fill="#f26a1b" opacity=".6"/>` +
      `<rect x="76" y="50" width="6" height="82" rx="3" fill="#fff" opacity=".3"/>`;
  } else if (kind === "towel") {
    body =
      `<rect x="40" y="86" width="120" height="34" rx="8" fill="#e8dcc4"/><path d="M52 98h96M52 108h96" stroke="#c9b894" stroke-width="3" stroke-dasharray="1 6" stroke-linecap="round"/>` +
      `<rect x="46" y="58" width="108" height="34" rx="8" fill="#f4eadb"/><path d="M58 70h84M58 80h84" stroke="#c9b894" stroke-width="3" stroke-dasharray="1 6" stroke-linecap="round"/>` +
      `<rect x="52" y="32" width="96" height="34" rx="8" fill="#fbf5ea"/><path d="M64 44h72M64 54h72" stroke="#c9b894" stroke-width="3" stroke-dasharray="1 6" stroke-linecap="round"/>`;
  }
  return `<svg viewBox="0 0 200 150" aria-hidden="true">${back}${body}</svg>`;
}

function renderArt() {
  document.querySelectorAll("[data-art]").forEach((el) => {
    el.innerHTML = artSvg(el.dataset.art);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader(document.body.dataset.page);
  renderFooter();
  fillContactDetails();
  renderActionBar();
  renderArt();
});
