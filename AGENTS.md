# AGENTS.md

## Cursor Cloud specific instructions

### Product
This repo is **ORRIS — Cream House**, a single-page, frontend-only marketing site for a fictional skincare brand (React 19 + TypeScript + Vite 8, animated with GSAP ScrollTrigger). There is no backend, database, auth, or payments — all product/ingredient data is hardcoded in `src/data.ts`. The "Add to bag" buttons are visual only (no cart logic).

### Branch layout gotcha
The `main` branch is an empty placeholder (just `README.md`). The actual application (with `package.json`, `src/`, etc.) lives on feature branches. The startup update script guards `npm install` behind a `package.json` check so it is safe to run on either branch.

### Running / building / testing
Standard scripts are defined in `package.json` (no need to duplicate them here):
- `npm run dev` — Vite dev server on **http://localhost:5173** (HMR enabled).
- `npm run build` — type-check (`tsc -b`) + production bundle into `dist/`.
- `npm run preview` — serve the production build (Vite default port **4173**).
- `npm run lint` — **oxlint** (config in `.oxlintrc.json`).
- There is **no test framework** configured; there are no automated tests to run.

### Non-obvious notes
- To manually verify the app you must **scroll**: the hero → "experience" → ingredients → "how it feels" → shop sections rely on GSAP ScrollTrigger, and the jar-lid opening + ingredient chips only animate as you scroll. Simply loading the page does not exercise the core experience.
- Node 22 / npm (the VM default) works fine; no `.nvmrc` or engine pin is present.
