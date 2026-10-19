# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Set-up. Project docs and rules are written; no website code yet. |
| **Live site** | Not live. Planned at `https://pradipdj432.github.io/gujarat-sales/` once GitHub Pages is on (D-003). |
| **Branches** | Docs set-up goes straight to `main` (owner's OK), then `dev` and `working` are made from `main`. From then on: `working` → `dev` → `main` (D-011). |
| **Blocked on** | Owner details: shop number and building, opening times, photos (see `backlog.md` → "Waiting on the business owner"). |
| **Next step** | Owner: answer the questions in `backlog.md` → "Next up". Dev: share the first-version plan and get the owner's OK. |

## Where we are
- **Business:** GUJARAT SALES, Surat - 395006. "All Type Of Brush, Paints Roller & Tools". Contact Vivek Kapadiya, +91 78629 37030. 10 products and 5 brands from the visiting card (details in `business.md`).
- **Website:** not built yet. Plan: plain HTML/CSS/JS static site on GitHub Pages, enquiries by call and WhatsApp, look taken from the visiting card (D-001, D-002, D-008).
- **Repo:** project docs (this file, `README.md`, `business.md`, `decisions.md`, `backlog.md`, `CLAUDE.md`) and the visiting card photos in `references/`.

## Pull requests
| PR | What | Merged |
|---|---|---|
| — | None yet | — |

## Log

### 2026-10-19
- The owner started the project: a static website for Gujarat Sales, Surat (Punagam, 395006), and shared photos of both sides of the visiting card.
- Read the rules and docs of the owner's other sites (Aara Culture and DK-Engineer) and copied the same way of working: same doc files, same `working` branch loop, same "never guess business facts" rule, plain HTML/CSS/JS with no build step.
- Saved the card photos the right way up in `references/` (D-009).
- Wrote the project docs: `README.md`, `business.md` (all facts from the card, plus a "Still to confirm" list), `decisions.md` (D-001 to D-011), `backlog.md`, `progress.md`, `CLAUDE.md`.
- The owner chose three branches: `working` → `dev` → `main` (D-011, replaces D-004). This first set-up goes straight to `main` with the owner's OK; `dev` and `working` are made from it.
- Found that the card's address (Sarthana Jakatnaka, Surat - 395006) and the owner's message (Punagam) name different areas. The owner confirmed **Punagam**; the card's area name is not used. Shop number and building still to come.
- The owner confirmed +91 78629 37030 for the website's Call and WhatsApp buttons (D-005 accepted). Shop is open Monday to Saturday, Sunday closed; times still to come.
- The owner said customers are everyone: painters and contractors, wholesale shops, home owners (retail), and builders and companies. The shop sells wholesale and retail, with no minimum order. Delivery is in Surat; payment by UPI and cash. No prices on the website: customers ask on WhatsApp.
