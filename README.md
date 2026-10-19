# Gujarat Sales — Website

The website for **GUJARAT SALES**, Surat (395006), Gujarat: all types of brushes, paint rollers and painting tools, with brands like Norton, 3M, CUMI, Stronger and Asian Paints. It shows what the shop sells and where it is, and makes it easy for customers to call or WhatsApp. There's no online ordering or payment.

## Project docs
| File | What's in it |
|---|---|
| `README.md` | This file: how the code works and how to run and edit it |
| `business.md` | What the business is, what it sells, how customers contact it |
| `decisions.md` | Every choice made and why (numbered D-001, D-002, …) |
| `backlog.md` | Everything still to do, with priority |
| `progress.md` | Current status and a dated work log |
| `CLAUDE.md` | Rules for keeping these docs and the code up to date |
| `references/` | Photos of the owner's visiting card, the source of the business facts (D-009) |

## Status
**Set-up.** Docs are ready; the website isn't built yet. Where the project stands: `progress.md`. What's next: `backlog.md` → "Next up".

## How it will work
- A static website: plain **HTML, CSS and JavaScript**. No framework and no build step (D-002).
- Hosted free on **GitHub Pages** from the `main` branch, repo root, at `https://pradipdj432.github.io/gujarat-sales/` (D-003).
- Customers enquire by **Call** or **WhatsApp** buttons with a ready message (D-001, D-005).
- Contact details (phone, WhatsApp, address, map) live in **one file, `js/config.js`** (D-006).
- The look follows the visiting card: orange-red and white, bold "GUJARAT" name (D-008).

## How we work (branches)
One working branch, **`dev`**, and **`main`** (live). Work is done on `dev` and pushed straight to `main`; there are no pull requests (D-011). The steps are in `CLAUDE.md` → "Branches".

## Folder layout
```
gujarat-sales/
├── README.md         This file
├── CLAUDE.md         Rules for people and AI working on the repo
├── business.md       Business facts
├── decisions.md      Decision log (D-001, D-002, …)
├── backlog.md        To-do list
├── progress.md       Status and work log
└── references/
    ├── visiting-card-front.jpg   Front: name, card line, contact person and number
    └── visiting-card-back.jpg    Back: product list, brands, address
```
The website files (`index.html`, `css/`, `js/`, `images/`) will be added in the repo root when the first version is built. Update this layout then.

## Run it on your computer
Once the site exists, start a small local server in the project folder (some browsers block scripts on pages opened straight from a file):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Hosting (GitHub Pages)
Not turned on yet. Once the first version is on `main`: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**. Every merge into `main` then goes live in a minute or two.
