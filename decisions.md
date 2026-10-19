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
| D-007 | Brand names as text only, no brand logos on the website | Accepted |
| D-008 | The website's look follows the visiting card | Proposed |
| D-009 | The visiting card is kept in `references/` as the source of business facts | Accepted |
| D-010 | Website in English first; Gujarati later if the owner wants | Accepted |
| D-011 | Work on `dev`, push straight to `main`; no pull requests | Accepted |
| D-012 | No prices on the website; customers ask on WhatsApp | Accepted |
| D-013 | No charges or fees mentioned anywhere on the website | Accepted |
| D-014 | Contact order: Call first, then WhatsApp and email. Product enquiries use WhatsApp with a ready message | Accepted |
| D-015 | White and orange theme, orange #f26a1b (buttons #d9560b); the owner asked for white and orange | Accepted |
| D-016 | The site is for marketing and enquiries only: customers call to ask; no buying or ordering online | Accepted |
| D-017 | Layout and style follow the DK ENGINEER'S site: orange hero band, numbered category tiles, feature cards, call-to-action band, phone action bar | Accepted |
| D-018 | Product pictures are simple drawings (`data-art`) until real white-background photos are added | Proposed |
| D-019 | One fixed Google Maps link (the listing ID link), not the short Share links | Accepted |

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
- **Status:** Accepted (owner confirmed on 2026-10-19)
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
- **Status:** Accepted (owner confirmed on 2026-10-19)
- **Context:** The card is in English (with "॥ શ્રી ॥" in Gujarati). Many customers in Surat may prefer Gujarati.
- **Decision:** Build the first version in English, with the product names exactly as on the card. Add a Gujarati version later if the owner asks.
- **Alternatives considered:** Gujarati only; both languages from the start (twice the text to keep up to date).
- **Consequences:** Faster first version. Adding Gujarati later means a second set of pages or a language switch. The "॥ શ્રી ॥" from the card is not shown on the website (owner's choice).

## D-011 — Work on `dev`, push straight to `main`; no pull requests
- **Date:** 2026-10-19
- **Status:** Accepted (replaces D-004; changed the same day from `working` → `dev` → `main`)
- **Context:** The owner wants to ship quickly and doesn't want the extra steps.
- **Decision:** Do the work on one branch, `dev` (the owner also calls it "working"), and push the finished work straight to `main`, which goes live. No pull requests and no separate `working` branch. Push to `main` only when the work is done and checked at phone and desktop width. Steps are in `CLAUDE.md`.
- **Alternatives considered:** `working` → `dev` → `main` with a pull request each time (safer, but slower); committing on `main` with no `dev` branch.
- **Consequences:** Fast. There is no review step, so check every change before pushing to `main`. Keep `dev` equal to `main` after each push.

## D-012 — No prices on the website; customers ask on WhatsApp
- **Date:** 2026-10-19
- **Status:** Accepted
- **Context:** Paint-tool prices change often, and the shop sells both wholesale and retail with no minimum order (so price depends on quantity).
- **Decision:** Show no prices. Each product has an "Ask price on WhatsApp" button with a ready message, and the Call button is always near.
- **Alternatives considered:** A price list on the site (goes out of date, needs a price list from the owner); prices for some items only.
- **Consequences:** Nothing to keep up to date. Every price enquiry is a call or WhatsApp message. A price list can be added later with a new decision.

## D-013 — No charges or fees mentioned anywhere on the website
- **Date:** 2026-10-19
- **Status:** Accepted
- **Context:** The owner said not to add any charge, or anything related to a charge, to the website.
- **Decision:** The website never mentions delivery charges, fees, minimum orders or credit. Delivery in Surat can be mentioned, but with nothing about cost.
- **Alternatives considered:** Saying "free delivery" or listing a charge.
- **Consequences:** Cost questions are answered by phone or WhatsApp, like prices (D-012).

## D-014
Call first, then WhatsApp and email on every page. Product "Ask" buttons open WhatsApp with the product name filled in.

**Why:** owner asked for Call to be the first option, and for enquiries not to depend on WhatsApp only.

## D-015
The site is white with orange: `--orange` #f26a1b for accents, `--orange-btn` #d9560b for buttons (white text stays readable). This replaces the first guess of #9a3b26 sampled from the card photo.

**Why:** the owner said the theme is white and orange and that the first version looked bad.

## D-016
The site is for marketing only. Nobody buys online; customers call (first), WhatsApp or email to ask about products and prices. Call is the main button on every page (D-014).

**Why:** the owner said the site is for marketing and customers call to enquire.

## D-017
The site copies the structure of the owner's DK ENGINEER'S site (hero with a collage, numbered category tiles, "why us" cards, brands, about, a call-to-action band, a four-column footer, an inquiry form), in white and orange (D-015) instead of blue and red. The mobile bottom bar is Call, WhatsApp, Email, in that order (D-014).

**Why:** the owner said the second version was only "20 percent" there and asked for a marketing-style site like DK-Engineer.

## D-018
Until real photos exist, each product shows a drawing made in `js/common.js` (`data-art="roller:yellow-line"`). To use a photo, replace the `<div class="art" data-art="...">` with `<img class="art" src="images/..." alt="...">` (JPEG, about 1000px wide, under 250 KB, white background).

**Why:** the owner wants white-background photos for each item, but the build environment cannot download images from the internet (network policy). The drawings keep the pages looking finished until the photos arrive.

## D-019
The website uses one fixed Google Maps link, `https://www.google.com/maps?cid=7343727991767936096`, set once in `js/config.js`. The short links from Google's Share button (`maps.app.goo.gl/...`) are a new link every time, so they are not used.

**Why:** the owner wanted one static link. The number is the listing's own ID, taken from the owner's embed code, so it does not change.

