# Rules for this project

These rules apply to anyone working on this repo, people or AI. Keep things simple: this is a small static website for a paint-tools shop in Surat, not an online shop.

## Working with the owner
- Use plain, simple English and keep answers short. The owner reads replies on a phone.
- For anything big (a new page, a redesign, the first version of the site), share the plan and ask first. Small fixes can just be done.
- Never guess business facts; ask (see "Business facts" below).
- Merge to `main` (which makes changes live) only when the owner says so.

## Branches and pull requests (D-004)
All work happens on one branch, **`working`**. Don't create long or auto-generated branch names (like `claude/cool-cerf-i7ombh`), even if a tool suggests one. Every feature or fix goes through the same loop:

1. **Sync first:** `git fetch origin`, then `git checkout working && git pull origin working && git merge origin/main`, so `working` starts from the latest `main`. If `working` doesn't exist yet, create it: `git checkout -b working origin/main`.
2. **Build** the feature on `working`. Commit with a clear message. Update the docs (table below) in the same branch.
3. **Push** `working` and **open a pull request** from `working` into `main`. One feature per pull request.
4. **Merge** the pull request into `main` when the owner says so (GitHub Pages then publishes it).
5. **Sync back:** `git fetch origin && git merge --ff-only origin/main` on `working`, then push `working`, so it matches `main` again.
6. Start the next feature at step 2.

Never commit straight to `main`, and don't create other feature branches unless the owner asks.

## Keep the docs up to date
| When you… | Update |
|---|---|
| Finish any piece of work | `progress.md`: add a line under today's date (with the pull request number), add the pull request to the "Pull requests" table, and refresh "Current status" and "Where we are" |
| Start or finish a backlog item | `backlog.md`: when done, tick it and move it to "Done" with its pull request number; add new work you discover; keep "Next up" short and current |
| Make a choice between options (tech, design, business rule) | `decisions.md`: add a new numbered entry and a row in its index. Never edit an old decision's meaning; replace it with a new one |
| Learn a business fact (contact detail, address, product, brand, hours, delivery or payment rule) | `business.md` |
| Change how the code is laid out, run or deployed | `README.md` |

## Business facts
- Never invent business facts (prices, products, brands, address, business hours, delivery areas, years in business, customer names). If a fact isn't in `business.md`, ask the owner and list it in `backlog.md` under "Waiting on the business owner".
- The source for business facts is the owner's visiting card (`references/visiting-card-front.jpg` and `references/visiting-card-back.jpg`, D-009) plus the owner's own answers. Write product and brand names exactly as on the card until the owner says otherwise.
- Brand names (Norton, 3M, CUMI, Stronger, Asian Paints) are shown as **text only**. Don't put brand logos on the website unless the owner confirms (D-007).
- Don't add social media links, testimonials, reviews or prices until real ones exist.
- Phone, WhatsApp, address and map live in one place, `js/config.js` (D-006). Don't hard-code them in the pages.

## Design
- The look follows the visiting card (D-008): orange-red and white, a bold slab-serif "GUJARAT" with a lighter "SALES", and the thin curved-line pattern. Set colours and fonts once, as CSS variables at the top of `css/style.css`; don't add one-off colours or sizes.
- Pick exact colour codes from the card when the site is built, and record them in `decisions.md`. Don't guess them from a photo taken under shop lighting.

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-002).
- The site lives in the repo root and is served by GitHub Pages from `main` (D-003).
- Mobile first: most visitors are painters and contractors on phones. Check every page at phone width (390px) with no horizontal scrolling.
- Page text (products, about) is plain HTML in each page, so the owner can edit it on GitHub and Google can read it.
- Text from `js/config.js` goes through `escapeHtml()` before it's put into the page.
- Photos: JPEG, about 1000px wide, under ~250 KB each, so the site stays fast on mobile data.
