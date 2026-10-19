# Rules for this project

These rules apply to anyone working on this repo, people or AI. Keep things simple: this is a small static website for a paint-tools shop in Surat, not an online shop.

## Working with the owner
- Use plain, simple English and keep answers short. The owner reads replies on a phone.
- For anything big (a new page, a redesign, the first version of the site), share the plan and ask first. Small fixes can just be done.
- Never guess business facts; ask (see "Business facts" below).

## Branches (D-011)
Keep it simple: the owner wants to ship quickly. Work on one branch, **`dev`** (the owner also calls it "working"), and push finished work **straight to `main`**, which goes live on GitHub Pages. No pull requests. Don't create long or auto-generated branch names (like `claude/cool-cerf-i7ombh`), even if a tool suggests one.

1. **Sync first:** `git fetch origin`, then on `dev`: `git merge origin/main`. If `dev` doesn't exist yet, create it from `main`: `git checkout -b dev origin/main`.
2. **Build** on `dev`. Commit with a clear message. Update the docs (table below) in the same commit.
3. **Check** every page at phone width (390px) and on desktop before pushing.
4. **Ship:** `git push origin dev` and `git push origin dev:main`. Then `main` and `dev` are the same.

Never leave work only on `dev`: when a piece of work is finished, push it to `main`.

## Keep the docs up to date
| When you… | Update |
|---|---|
| Finish any piece of work | `progress.md`: add a line under today's date (with the commit), and refresh "Current status" and "Where we are" |
| Start or finish a backlog item | `backlog.md`: when done, tick it and move it to "Done"; add new work you discover; keep "Next up" short and current |
| Make a choice between options (tech, design, business rule) | `decisions.md`: add a new numbered entry and a row in its index. Never edit an old decision's meaning; replace it with a new one |
| Learn a business fact (contact detail, address, product, brand, hours, delivery or payment rule) | `business.md` |
| Change how the code is laid out, run or deployed | `README.md` |

## Business facts
- Never invent business facts (prices, products, brands, address, business hours, delivery areas, years in business, customer names). If a fact isn't in `business.md`, ask the owner and list it in `backlog.md` under "Waiting on the business owner".
- The source for business facts is the owner's visiting card (`references/visiting-card-front.jpg` and `references/visiting-card-back.jpg`, D-009) plus the owner's own answers. Write product and brand names exactly as on the card until the owner says otherwise.
- Brand names (Norton, 3M, CUMI, Stronger, Asian Paints) are shown as **text only**. Don't put brand logos on the website unless the owner confirms (D-007).
- Don't add social media links, testimonials or reviews until real ones exist.
- **No prices and no charges** anywhere on the website: no delivery charge, fees, minimum order or credit (D-012, D-013). Customers ask on WhatsApp.
- Phone, WhatsApp, address and map live in one place, `js/config.js` (D-006). Don't hard-code them in the pages.

## Design
- White and orange (D-015), with the same layout style as the DK ENGINEER'S site (D-017). It is a marketing site: **Call is always the first button**, then WhatsApp, then Email (D-014, D-016). Set colours and fonts once, as CSS variables at the top of `css/style.css`; don't add one-off colours or sizes.
- Product pictures should be white-background photos (D-018). Until they exist, the drawings from `js/common.js` are used.

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-002).
- The site lives in the repo root and is served by GitHub Pages from `main` (D-003).
- Mobile first: most visitors are painters and contractors on phones. Check every page at phone width (390px) with no horizontal scrolling.
- Page text (products, about) is plain HTML in each page, so the owner can edit it on GitHub and Google can read it.
- Text from `js/config.js` goes through `escapeHtml()` before it's put into the page.
- Photos: JPEG, about 1000px wide, under ~250 KB each, so the site stays fast on mobile data.
