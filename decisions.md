# Decisions

A log of choices made for the Gujarat Sales website and why. Add new decisions at the bottom with the next number. Never delete an old one: if it changes, add a new decision that replaces it and set the old one's status to `Replaced by D-xxx`.

**Status values:** `Accepted` (owner agreed) · `Proposed` (suggested, not confirmed by the owner yet) · `Replaced by D-xxx`

## Index
| # | Decision | Status |
|---|---|---|
| D-001 | Static information website with enquiries by phone and WhatsApp; no online ordering or payment | Accepted (enquiry details Proposed) |
| D-002 | Plain HTML, CSS and JavaScript with no build step | Accepted |
| D-003 | Own public repo `gujarat-sales`, hosted on the free GitHub Pages address from `main` | Proposed |
| D-004 | All work on one `working` branch, merged to `main` by pull request | Replaced by D-011 |
| D-005 | Enquiries go to +91 78629 37030 (phone and WhatsApp) | Accepted |
| D-006 | Contact details and shop settings in one file, `js/config.js` | Proposed |
| D-007 | Brand names as text only, no brand logos on the website | Proposed |
| D-008 | The website's look follows the visiting card | Proposed |
| D-009 | The visiting card is kept in `references/` as the source of business facts | Accepted |
| D-010 | Website in English first; Gujarati later if the owner wants | Proposed |
| D-011 | Three branches: `working` → `dev` → `main` | Accepted |

When you add a decision, add a row here too.

---

## D-001 — Static information website with enquiries by phone and WhatsApp
- **Date:** 2026-10-19
- **Status:** Accepted (static site: owner's request. Enquiry by phone and WhatsApp: Proposed)
- **Context:** The owner asked for a static website only for Gujarat Sales, a paint-tools shop in Surat. The visiting card shows one number with the WhatsApp sign.
- **Decision:** Build a small information website: what the shop sells, the brands, where it is and how to contact it. Customers enquire by tapping **Call** or **WhatsApp** (a ready message, for example "Hi Gujarat Sales, I want to ask about: Epoxy Roller"). No cart, no login, no online payment.
- **Alternatives considered:** A catalog with prices and a WhatsApp order button (like Aara Culture; needs prices and stock from the owner); a full online shop (too much to build and run).
- **Consequences:** No server, no database, free to host. Prices and stock are handled on the phone or WhatsApp. A price list can be added later if the owner wants.

## D-002 — Plain HTML, CSS and JavaScript with no build step
- **Date:** 2026-10-19
- **Status:** Accepted
- **Context:** The owner wants a static site and works the same way on the Aara Culture and DK-Engineer sites. Most visitors will be on phones. The owner may edit text straight on GitHub.
- **Decision:** Write the site in plain HTML/CSS/JavaScript. No framework, no build tools, no `npm install`.
- **Alternatives considered:** Angular / React / a static site generator (needs a build step and makes direct edits on GitHub harder).
- **Consequences:** Fast on phones and simple to host. The shared header and footer are drawn by a small script (`js/common.js`) instead of being repeated in each page.

## D-003 — Own public repo, hosted on the free GitHub Pages address
- **Date:** 2026-10-19
- **Status:** Proposed (GitHub Pages is not turned on yet)
- **Context:** The site should go live with no cost. The owner created the public repo `PradipDj432/gujarat-sales`.
- **Decision:** Publish the `main` branch, repo root, with GitHub Pages at `https://pradipdj432.github.io/gujarat-sales/`. Add a custom domain (for example `gujaratsales.in`) later if the owner wants one.
- **Alternatives considered:** Buy a domain now; paid hosting.
- **Consequences:** The repo must stay public (free GitHub Pages needs a public repo). Links shared now will change if a domain is added; GitHub Pages can redirect the old address.

## D-004 — All work on one `working` branch, merged to `main` by pull request
- **Date:** 2026-10-19
- **Status:** Replaced by D-011 (the owner added a `dev` branch between `working` and `main`)
- **Context:** The owner wants one predictable way to add features: a single branch with a short, simple name, and every change reviewed as a pull request before it reaches the live site.
- **Decision:** Work only on the `working` branch. For each feature: sync `working` with `main`, build, open a pull request from `working` into `main`, merge when the owner says so, then fast-forward `working` to `main` again. Steps are in `CLAUDE.md`.
- **Alternatives considered:** A new branch per feature (more branches to keep track of); committing straight to `main` (no review step, and every mistake goes live).
- **Consequences:** `main` is always what's live. One feature per pull request keeps each change easy to check and undo.

## D-005 — Enquiries go to +91 78629 37030
- **Date:** 2026-10-19
- **Status:** Accepted (owner confirmed on 2026-10-19)
- **Context:** The Call and WhatsApp buttons need a number.
- **Decision:** Use **+91 78629 37030** (Vivek Kapadiya) for both. The WhatsApp link format is `https://wa.me/917862937030?text=...`.
- **Alternatives considered:** —
- **Consequences:** If the number changes, update it in one place, `js/config.js`, and in `business.md`.

## D-006 — Contact details and shop settings in one file, `js/config.js`
- **Date:** 2026-10-19
- **Status:** Proposed (technical; same set-up as DK-Engineer)
- **Context:** The phone number, WhatsApp number, address and map link appear on many pages (header, footer, contact page, buttons).
- **Decision:** Keep them in one file, `js/config.js`. Pages read from it; nothing is hard-coded in the HTML.
- **Alternatives considered:** Repeat the details in every page (easy to miss one when they change).
- **Consequences:** One edit changes the details everywhere. Text from the file goes through `escapeHtml()` before it's shown.

## D-007 — Brand names as text only, no brand logos on the website
- **Date:** 2026-10-19
- **Status:** Proposed
- **Context:** The card shows the logos of Norton (Saint-Gobain), 3M, CUMI, Stronger and Asian Paints. Brand logos are trademarks, and the DK-Engineer site made the same choice (DK D-015).
- **Decision:** List the brand names as text ("Brands we stock: Norton, 3M, CUMI, Stronger, Asian Paints"). Add logos only if the owner confirms they may be used.
- **Alternatives considered:** Show the logos, as on the card.
- **Consequences:** The brands section looks plainer, but there's no trademark question.

## D-008 — The website's look follows the visiting card
- **Date:** 2026-10-19
- **Status:** Proposed
- **Context:** The owner already has a printed card with a clear style. The site should look like the same business.
- **Decision:** Orange-red and white as the main colours, a bold slab-serif for the "GUJARAT" name with a lighter "SALES" (with the three speed lines), and the thin curved-line pattern as a light background on the home page banner. Exact colour codes and fonts are picked when the first version is built and added as a new decision.
- **Alternatives considered:** A new look not tied to the card.
- **Consequences:** Customers who have the card will recognise the website. A clean logo file (SVG) will be needed, redrawn from the card.

## D-009 — The visiting card is kept in `references/` as the source of business facts
- **Date:** 2026-10-19
- **Status:** Accepted
- **Context:** The owner shared photos of both sides of the visiting card to start the project.
- **Decision:** Save both photos, turned the right way up, as `references/visiting-card-front.jpg` and `references/visiting-card-back.jpg`. Business facts in `business.md` come from the card and the owner's answers only.
- **Alternatives considered:** Keep the photos out of the repo.
- **Consequences:** Anyone working on the site can check a fact against the card. When the owner gets a new card, add it next to the old one (don't delete the old one).

## D-010 — Website in English first; Gujarati later if the owner wants
- **Date:** 2026-10-19
- **Status:** Proposed
- **Context:** The card is in English (with "॥ શ્રી ॥" in Gujarati). Many customers in Surat may prefer Gujarati.
- **Decision:** Build the first version in English, with the product names exactly as on the card. Add a Gujarati version later if the owner asks.
- **Alternatives considered:** Gujarati only; both languages from the start (twice the text to keep up to date).
- **Consequences:** Faster first version. Adding Gujarati later means a second set of pages or a language switch.

## D-011 — Three branches: `working` → `dev` → `main`
- **Date:** 2026-10-19
- **Status:** Accepted
- **Context:** The owner wants a `dev` branch as well as `working`, so work can be checked before it reaches the live site. Replaces D-004.
- **Decision:** Build on `working`. Each feature goes by pull request from `working` into `dev`. When the owner says so, `dev` goes by pull request into `main`, which is live. After that, `dev` and `working` are fast-forwarded to `main`. Steps are in `CLAUDE.md`.
- **Alternatives considered:** Only `working` → `main`, like Aara Culture and DK-Engineer (D-004); `dev` as a preview copy that is never merged.
- **Consequences:** Two pull requests per release (`working` → `dev`, then `dev` → `main`), but `main` only changes when the owner is happy with `dev`. Several features can collect on `dev` and go live together.
