## Quick orientation

This is a small static portfolio site (plain HTML/CSS/JS). Main points an automated code agent should know to be productive immediately:

- The site is a collection of static HTML pages at the repo root (e.g. `index.html`, `work.html`, `aavya.html`, `contact.html`).
- Styling is a mix of handwritten CSS (`src/style.css`) and Tailwind utility classes. There is a generated Tailwind file `src/output.css` and an author input file `src/input.css`.
- JavaScript lives in `js/` (`js/index.js`, `js/height.js`) and drives interactivity (hover overlay, typed text, form/email flows).
- Local fonts are under `font/` and are referenced via `font/leifa.css` and `font/raleway/raleway.css`.

Keep edits minimal and predictable: most pages are very similar, so prefer updating partial patterns (class names, shared ids) rather than making sweeping structural changes across all pages without tests or a clear migration plan.

## Key files and why they matter

- `index.html` — canonical example of the page structure: header, hero, project listings, footer. Use it to find global assets and script ordering.
- `src/style.css` — primary handwritten styles and component rules (cursor hiding, overlay clip-path, custom animations). Prefer small additions here for project-specific styles.
- `src/input.css` — Tailwind entry (contains `@tailwind base; @tailwind components; @tailwind utilities;`).
- `src/output.css` — generated Tailwind build (already checked-in). If you regenerate Tailwind, overwrite this file and link it instead of the CDN for production.
- `tailwind.config.js` — present but slightly odd: `content` points at `./src/**/*.{html,js}` while most HTML files sit at repo root. If you regenerate Tailwind, update `content` to include the root HTML files (see example below).
- `js/index.js` — interactive behaviors: overlay follow, nav hover mapping (classes `nav-optn-black|white` and `hover`), typewriter, EmailJS initialization. Large, single-file UX logic — modify cautiously.
- `js/height.js` — helper to match heights between left/right columns (IDs like `source-div`/`target-div`, `source-info-div`/`target-info-div`). Good example of reliance on exact IDs.
- `font/` and `images/` — self-hosted assets; image paths are referenced directly from HTML (`images/...`).

## Project-specific conventions and patterns

- UI glue is ID-dependent. Example: height syncing expects `source-div` and `target-div` to exist. When refactoring, update `js/height.js` or keep those IDs.
- Hover/overlay behaviour uses class pairs: `.nav-optn-black` and `.nav-optn-white` share logic in `js/index.js` (hover state is toggled by index). When adding nav items, add matching data-index attributes.
- The custom cursor is intentionally hidden (`cursor: none`) in `src/style.css`. If you add interactive controls, consider restoring a visible cursor only where necessary.
- Email sending uses EmailJS client-side (`js/index.js`) and contains an init user ID. Treat this as a secret; do not commit new service keys into the repo or echo them to logs.

## Build / run / debug workflows

There is no package.json. The site runs by opening HTML in a browser (or using a Live Server extension). Two Tailwind workflows exist: CDN (fast, currently used in HTML) and compiled CSS (checked-in `src/output.css`).

When asked to regenerate Tailwind (recommended for larger utility changes):

- Prerequisites: Node.js + npm installed.
- From project root (PowerShell):

  npm init -y ; npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss -i ./src/input.css -o ./src/output.css --minify

To watch and iterate (dev):

  npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

After generating `src/output.css`, replace the runtime CDN usage in HTML (remove `<script src="https://cdn.tailwindcss.com"></script>`) and add a stylesheet link (example):

  <link rel="stylesheet" href="src/output.css">

This ensures deterministic builds and smaller production bundles.

Debug/preview tips:

- Open `index.html` directly or use VS Code Live Server for hot reload.
- Browser devtools: inspect `overlay` element and `--x`/`--y` CSS variables to debug mouse-follow clip-path.
- If interactions don't run, confirm `js/index.js` and `js/height.js` are included near the end of the HTML (they are).

## Integration points / external deps

- EmailJS — client initialization exists in `js/index.js` (emailjs.init). If you need to change the EmailJS configuration, update that file and treat IDs as secrets.
- AOS, Typed.js — loaded from CDNs in HTML (`unpkg`, `jsdelivr`). Replacing with local copies is possible but not necessary for small changes.
- Tailwind — pages currently include the Tailwind CDN; compiled Tailwind lives at `src/output.css`.

## When editing, watch for these gotchas

- IDs are used programmatically (height sync, typewriter targets, content toggles). Renaming nodes without updating JS will break layout or interactions.
- `tailwind.config.js` content path should include root HTML files before regenerating Tailwind, otherwise utilities used in root HTML may be purged.
- Many pages duplicate structure. If you change markup, either update every page or introduce a build/include system (out of scope) — manual edits are expected.

## Example checklist for small changes

1. Edit HTML/CSS/JS in file(s).
2. If you add Tailwind utility classes, regenerate `src/output.css` (see commands) or keep using CDN for quick tests.
3. Open the changed page in browser (Live Server recommended) and confirm: layout, overlay, and typewriter.
4. Run a quick visual smoke test: verify `contact` form still triggers EmailJS and that nav hover underline appears (inspect `.nav-optn-black.hover::after`).

If anything above is unclear or you want the agent to also add `package.json` / npm scripts for Tailwind builds, tell me and I will add it.
