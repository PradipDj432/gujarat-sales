# Backlog

Everything still to do, newest ideas at the bottom of each section. When work starts on an item, note it in `progress.md`. When it's done, tick it, move it to "Done" with its pull request number, and add a line to `progress.md`.

**Priority:** `P1` needed now · `P2` soon · `P3` later / nice to have
**Owner:** `Owner` (business owner must provide or decide) · `Dev` (build work)

## Next up
The few things to do next, in order. Keep this list short and current.

1. **Owner:** check the product descriptions on `products.html` (written from general knowledge) and tell us what Rustic Towel and Lapi Patra are.
2. **Owner:** send white-background photos of the products, or allow the environment to reach image sites.
3. **Dev:** put a photo in every product card (replace the drawing with an `<img>`, D-018).

## Waiting on the business owner
- [ ] **P1 · Owner** Look at the first-version plan and say OK or what to change.
- [ ] **P2 · Owner** Photos of the shop (outside board and inside) and of the products.
- [ ] **P2 · Owner** Full product range beyond the card, with sizes (for example roller sizes in inches). Prices stay off the website (customers ask on WhatsApp).
- [ ] **P2 · Owner** Confirm the look follows the visiting card (D-008).
- [ ] **P1 · Owner** Check the product descriptions on `products.html`. Unsure: PU Brush (what PU means), Deluxe and Jyoti brushes (brand names or ranges?), Brown Paper (sanding paper?), Rustic Towel and Lapi Patra (what they are and what they are used for), and how the yellow line and brown line rollers differ.
- [ ] **P3 · Owner** GST number (only if the owner wants it shown).
- [ ] **P2 · Owner** After GitHub Pages is on: add the site in Google Search Console and submit `sitemap.xml` (D-023).
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
- [x] **Owner** Language: English first (D-010). "॥ શ્રી ॥" not shown on the website.
- [x] **Owner** Brands shown as text only, no logos (D-007).
- [x] **Owner** Delivery in Surat; payment by UPI and cash.
- [x] **Owner** Wholesale and retail both, no minimum order.
- [x] **Owner** Customers: painters and contractors, wholesale shops, home owners, builders and companies.
- [x] **Owner** Website number: +91 78629 37030 for Call and WhatsApp (D-005).
- [x] **Owner** Shop area: Punagam, Surat - 395006 (not Sarthana Jakatnaka, as on the card).
- [x] **Owner** Branch rule: work on `dev`, push straight to `main`, no pull requests (D-011).
- [x] **Owner** Address: 6, Sardar Nagar, Punagam, Surat - 395006. Hours Mon–Sat 8 AM–8 PM, Sunday closed. Google Maps link and email received. No credit. No charges shown on the website (D-013).
- [x] **Dev** Visiting card photos saved upright in `references/` (D-009); card facts written into `business.md`.
