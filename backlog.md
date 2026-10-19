# Backlog

Everything still to do, newest ideas at the bottom of each section. When work starts on an item, note it in `progress.md`. When it's done, tick it, move it to "Done" with its pull request number, and add a line to `progress.md`.

**Priority:** `P1` needed now · `P2` soon · `P3` later / nice to have
**Owner:** `Owner` (business owner must provide or decide) · `Dev` (build work)

## Next up
The few things to do next, in order. Keep this list short and current.

1. **Owner:** send the shop number, building and landmark in Punagam, and the Google Maps link if there is one.
2. **Owner:** send the opening and closing times (days: Mon–Sat, Sunday closed).
3. **Owner:** send photos of the shop and the products (rollers, brushes, papers, tools).
4. **Dev:** share the plan for the first version (pages, look, home page layout) and get the owner's OK before building.

## Waiting on the business owner
- [ ] **P1 · Owner** Full shop address in Punagam: shop number, building, street, landmark. Google Maps link.
- [ ] **P1 · Owner** Opening and closing times (days are Mon–Sat, Sunday closed).
- [ ] **P1 · Owner** Look at the first-version plan and say OK or what to change.
- [ ] **P2 · Owner** Photos of the shop (outside board and inside) and of the products.
- [ ] **P2 · Owner** Full product range beyond the card, with sizes (for example roller sizes in inches). Show prices on the website or not?
- [ ] **P2 · Owner** Minimum order for wholesale (customers are everyone: painters, contractors, shops, home owners, builders).
- [ ] **P2 · Owner** Delivery in Surat or in-shop only; any charge. Payment methods (cash, UPI, credit).
- [ ] **P2 · Owner** Brand logos on the website, or names only (D-007)?
- [ ] **P2 · Owner** Confirm the look follows the visiting card (D-008).
- [ ] **P3 · Owner** English only, or Gujarati too (D-010)? Show "॥ શ્રી ॥" on the site?
- [ ] **P3 · Owner** Years in business, email, social media, GST number (only if the owner wants them shown).
- [ ] **P3 · Owner** Turn on GitHub Pages after the first merge (Settings → Pages → Deploy from a branch → `main` / `(root)`) (D-003).
- [ ] **P3 · Owner** Decide on a custom domain (for example `gujaratsales.in`).
- [ ] **P3 · Owner** Google Business Profile: does the shop have one? Add the website link to it once live.

## To build
- [ ] **P1 · Dev** First-version plan for the owner: pages (proposed: Home, Products, Brands/About, Contact, 404), home page layout and colours from the card.
- [ ] **P1 · Dev** Site skeleton: shared header and footer (`js/common.js`), mobile-first styles (`css/style.css`), settings file (`js/config.js`), `.nojekyll` (D-002, D-006).
- [ ] **P1 · Dev** Logo: clean SVG of "GUJARAT SALES" redrawn from the card (slab-serif name, speed lines), plus a browser icon.
- [ ] **P1 · Dev** Home page: banner with the name and card line, product groups, brands (text), why buy from us (only confirmed facts), call and WhatsApp buttons, map.
- [ ] **P1 · Dev** Products page: the 10 items from the card (names exactly as printed) plus brushes, each with an "Ask on WhatsApp" button.
- [ ] **P1 · Dev** Contact page: address, phone, WhatsApp, hours, Google map (once confirmed).
- [ ] **P1 · Dev** Floating WhatsApp button on phones; ready WhatsApp messages ("Hi Gujarat Sales, I want to ask about: …").
- [ ] **P2 · Dev** `404.html` that works at any wrong address on GitHub Pages.
- [ ] **P2 · Dev** Link previews for WhatsApp/Facebook (`og:image`, `og:title`, `og:url`), `sitemap.xml`, `robots.txt`.
- [ ] **P2 · Dev** Local business data for Google (`LocalBusiness` JSON-LD: name, address, phone, hours), once the address and hours are confirmed.
- [ ] **P2 · Dev** Replace placeholder pictures with the owner's photos, compressed for phones.
- [ ] **P3 · Dev** Gujarati version, if the owner wants it (D-010).
- [ ] **P3 · Dev** Free visitor counter (for example GoatCounter).
- [ ] **P3 · Dev** Connect a custom domain once bought.

## Done
- [x] **Dev** Project docs and rules: `README.md`, `business.md`, `decisions.md`, `backlog.md`, `progress.md`, `CLAUDE.md`, in the same format as Aara Culture and DK-Engineer.
- [x] **Owner** Customers: painters and contractors, wholesale shops, home owners, builders and companies.
- [x] **Owner** Days open: Monday to Saturday, Sunday closed.
- [x] **Owner** Website number: +91 78629 37030 for Call and WhatsApp (D-005).
- [x] **Owner** Shop area: Punagam, Surat - 395006 (not Sarthana Jakatnaka, as on the card).
- [x] **Owner** Branches: `working` → `dev` → `main` (D-011).
- [x] **Dev** Visiting card photos saved upright in `references/` (D-009); card facts written into `business.md`.
