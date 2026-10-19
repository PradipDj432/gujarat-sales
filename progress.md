# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Marketing site with detailed product text and SEO set-up pushed to `main`; waiting on product photos and the owner's check of product text. |
| **Live site** | Not live. Planned at `https://pradipdj432.github.io/gujarat-sales/` once GitHub Pages is on (D-003). |
| **Branches** | `dev` (work) and `main` (live). Push straight to `main`, no pull requests (D-011). |
| **Blocked on** | Nothing. Photos of the shop and products would help but aren't needed to start. |
| **Next step** | Add white-background product photos (need image sources the environment can reach, or the owner's own photos). Owner: turn on GitHub Pages. |

## Where we are
- **Business:** GUJARAT SALES, Surat - 395006. "All Type Of Brush, Paints Roller & Tools". Contact Vivek Kapadiya, +91 78629 37030. 10 products and 5 brands from the visiting card (details in `business.md`).
- **Website:** built (Home, Products, About, Contact, 404) in white and orange with the DK-Engineer layout (D-017); new wordmark logo (D-022); 8+ years and 120+ customers shown (D-020); SEO set-up (D-021, D-023). Call first, then WhatsApp and email (D-014, D-016). Product cards show drawings until photos are added (D-018).
- **Repo:** project docs (this file, `README.md`, `business.md`, `decisions.md`, `backlog.md`, `CLAUDE.md`) and the visiting card photos in `references/`.

## Log

### 2026-10-19
- The owner started the project: a static website for Gujarat Sales, Surat (Punagam, 395006), and shared photos of both sides of the visiting card.
- Read the rules and docs of the owner's other sites (Aara Culture and DK-Engineer) and copied the same way of working: same doc files, same `working` branch loop, same "never guess business facts" rule, plain HTML/CSS/JS with no build step.
- Saved the card photos the right way up in `references/` (D-009).
- Wrote the project docs: `README.md`, `business.md` (all facts from the card, plus a "Still to confirm" list), `decisions.md` (D-001 to D-011), `backlog.md`, `progress.md`, `CLAUDE.md`.
- The owner chose three branches: `working` → `dev` → `main` (D-011, replaces D-004). This first set-up goes straight to `main` with the owner's OK; `dev` and `working` are made from it.
- Found that the card's address (Sarthana Jakatnaka, Surat - 395006) and the owner's message (Punagam) name different areas. The owner confirmed **Punagam**; the card's area name is not used. Shop number and building still to come.
- The owner confirmed +91 78629 37030 for the website's Call and WhatsApp buttons (D-005 accepted). Shop is open Monday to Saturday, Sunday closed; times still to come.
- The owner said customers are everyone: painters and contractors, wholesale shops, home owners (retail), and builders and companies. The shop sells wholesale and retail, with no minimum order. Delivery is in Surat; payment by UPI and cash. No prices on the website: customers ask on WhatsApp. Brands are shown as text only, no logos (D-007 accepted). Website in English first (D-010 accepted); "॥ શ્રી ॥" is not shown. The shop has a Google Maps listing and an email; both still to come. No social media.
- Owner changed the branch rule to: work on `dev`, push straight to `main`, no pull requests (D-011), to ship quickly.
- Owner confirmed: shop is at 6, Sardar Nagar, Punagam, Surat - 395006; open Monday to Saturday 8 AM to 8 PM, Sunday closed; Google Maps link https://share.google/CEIrgwoDmdcpTSJ8T; email kapadiyavivek972@gmail.com; no credit. No charges or anything about charges on the website (D-013).
- Built the first version on `dev` and pushed it to `main`: Home, Products (rollers, brushes, papers, other tools), Contact, 404. Contact details in `js/config.js`.
- Owner said the first look was bad and asked for a white and orange theme and white-background photos for each item. Redesigned: sticky header with a Call button, big Call button, trust strip, rounded cards (D-015, D-016). Photos could not be downloaded: this environment's network blocks image sites, so cards use line icons for now.
- Owner said the second version was only "20 percent" there and asked for a marketing look like the DK-Engineer site. Studied the DK-Engineer repo and rebuilt the site in the same style (D-017): orange hero with a collage, numbered category tiles, feature cards, brands, visit-us block, call-to-action band, four-column footer, inquiry form with WhatsApp or email, phone action bar (Call, WhatsApp, Email), new About page.
- Removed "no minimum order" from the site. D-013 says nothing about charges or minimum orders goes on the website; it had slipped into the first versions.
- Owner corrected the address: Shop No. 6, Sardar Nagar-1, Kalyan Nagar, Punagam, Varachha, Surat - 395011 (pin code 395011, not 395006), near the map link https://maps.app.goo.gl/3ByvtqhP69i9da6fA. Updated `js/config.js`, the contact page text and the map (the build environment cannot open that link, so the map is searched by address; to check on the live site).
- Owner gave the final address, to be used everywhere: Sardar Nagar-1, Kalyan Nagar, Punagam, Varachha, Surat, Gujarat 395006. Updated `js/config.js` (footer, contact page, map) and the contact page text. Pin code is back to 395006; "Shop No. 6" is no longer shown.
- Owner gave the Google Maps embed for the GUJARAT SALES listing and a short link (https://maps.app.goo.gl/DhGY7ZWzsg6Wyihf8). The contact page map now shows the real listing pin and the "Open in Google Maps" buttons use the short link (`js/config.js`).
- Owner asked for one static map link because Google's Share button gives a different short link every time. Set the fixed listing link `https://www.google.com/maps?cid=7343727991767936096` in `js/config.js` (D-019); every "Open in Google Maps" button uses it.
- Owner asked for: a new logo, other wording for the opening days, "8+ years (since August 2018)" and "120+ customers" on the About page, more plain-English detail for every product, and better SEO.
  - **Logo:** replaced the "GS" square with a text wordmark like the card (D-022); new browser icon (paint roller).
  - **Hours:** now "Mon – Sat: 8 AM – 8 PM · Sunday closed" everywhere.
  - **Content:** home page now says what the shop and website are, has a numbers strip, "four easy steps" and a questions section; About page has the story, 8+ years and 120+ customers (D-020); every product has a short plain-English description (to be checked by the owner).
  - **SEO (D-021, D-023):** header, footer, address and drawings written into the HTML; unique titles and descriptions; canonical links; share image; structured data; `sitemap.xml` and `robots.txt`.
- Owner asked for a lighter orange. Main orange is now #ee6c14 with a brighter hero gradient, accent #ff8a3d; favicon, share image and browser theme colour updated (D-024). White text is a little less contrasty, so tell me if it should be lighter or darker.
- Owner asked for light orange as the background (logo colours unchanged). Hero, page headers and call-to-action bands are now light peach with dark text (D-025).
- Owner asked for product content like the Angel Painting Tools and Aarohi sites. Product cards now show "Best for" and "Sizes: All sizes available" with a "View details" link, and every product has its own page (14 pages, in `sitemap.xml`) (D-026). No brand line, as the owner asked. "Best for" lines are general; owner to check the Rustic Towel and Lapi Patra ones.
- Owner said the product work was not enough. Reworked the whole range from the reference sites and web search: 18 products in 4 groups (added microfiber, exterior and foam rollers, trishul scraper; "Rustic Towel" is now "Rustic Trowel"), a "Which one do I need?" guide, and longer pages for each product (D-027). Items not on the visiting card are listed in `business.md` for the owner to confirm.
- Owner asked to check product names against the internet. Checked all of them: added Flat Wall Brush, Roller Handle, Paint Tray and Extension Pole (new group "Roller accessories"), renamed two tools; 22 products in 5 groups (D-028).
- Owner said buttons are too big and the orange and green too strong. All buttons are smaller with less padding, and orange and green are lighter, on every page (D-029).
- Owner asked for real white-background photos for every product (hero unchanged). The build environment still cannot download images (network policy blocks image sites), so no photos were added. Prepared `images/products/` so a photo named `<product id>.jpg` replaces the drawing on the product card and its page (D-018).
- Added free-licence white-background photos for 10 of 22 products (`images/products/`, sources in `CREDITS.md`). The other 12 still show drawings until the owner sends photos.
