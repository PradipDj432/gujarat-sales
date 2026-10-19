// Shared code for every page. The header, footer, contact details and product drawings are written
// straight into each page's HTML (so Google can read them without running scripts, D-021).
// This file only adds the phone menu button and two helpers used by the inquiry form.

const MENU_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
const CLOSE_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';

function whatsappLink(message) {
  const base = "https://wa.me/" + BUSINESS.whatsappNumber;
  return message ? base + "?text=" + encodeURIComponent(message) : base;
}

// Phone menu: the button opens and closes the navigation.
function initMenu() {
  const header = document.getElementById("site-header");
  const toggle = header && header.querySelector(".nav-toggle");
  if (!toggle) return;
  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = open ? CLOSE_ICON : MENU_ICON;
  };
  toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", initMenu);
