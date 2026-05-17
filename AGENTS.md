# PsCafeManagmentSystem-Website - Agent Guide

## Project Overview

Static single-page website for the PlayStation Café Management System desktop app. Hosted on GitHub Pages. No build step, no framework — vanilla HTML, CSS, and JavaScript.

## Structure

```
PsCafeManagmentSystem-Website/
├── index.html          # Single page — all sections
├── css/
│   └── style.css       # All styles, dark theme
├── js/
│   └── main.js         # Nav toggle, FAQ accordion, GitHub Releases API, language toggle (EN/MK)
├── screenshots/        # App screenshots (WebP)
│   ├── hero-dashboard.webp
│   ├── feature-*.webp
│   └── step-*.webp
└── .gitignore
```

## Sections (in order)

1. **Hero** — Title, tagline, download buttons, hero screenshot
2. **Features** — 6 alternating screenshot+text rows (dashboard, sessions, billing, alerts, reports, devices)
3. **Download** — Windows (.zip) and Linux (.tar.gz) cards, version fetched from GitHub Releases API
4. **System Requirements** — Windows/Linux requirement cards
5. **Getting Started** — 3-step visual guide with screenshots
6. **FAQ** — Collapsible accordion
7. **Footer** — Copyright

## Developer Commands

```bash
# Preview locally (any static server works)
python -m http.server 8000

# Or use VS Code Live Server extension
```

No build step. Edit files and refresh the browser.

## Adding Screenshots

Replace the files in `screenshots/` with actual WebP screenshots from the desktop app. The filenames are already referenced in `index.html`:

| File | Section | What to capture |
|------|---------|-----------------|
| `hero-dashboard.webp` | Hero | Main dashboard with device cards |
| `feature-dashboard.webp` | Features | Dashboard close-up |
| `feature-sessions.webp` | Features | Session start dialog |
| `feature-billing.webp` | Features | Session end summary with price |
| `feature-alerts.webp` | Features | Overdue device card / alert state |
| `feature-reports.webp` | Features | Reports window |
| `feature-devices.webp` | Features | Device management dialog |
| `step-1-download.webp` | Getting Started | Download section or extracted folder |
| `step-2-run.webp` | Getting Started | App launching / first screen |
| `step-3-session.webp` | Getting Started | Starting a session on a device |

Recommended screenshot width: **960px** for hero, **600px** for feature/step screenshots. Feature screenshot containers use `width: fit-content` so they shrink-wrap to the image size — varying aspect ratios are fine.

## GitHub Releases Integration

`js/main.js` fetches the latest release from the GitHub API:

```js
const GITHUB_OWNER = "FilipNastovski";
const GITHUB_REPO = "PsCafeManagmentSystem-Website";
```

It expects release assets named:
- `PS-Cafe-Manager-windows.zip` (or any name containing "windows")
- `PS-Cafe-Manager-linux.tar.gz` (or any name containing "linux")

The download buttons auto-update their `href` to point to the latest release asset URLs. If no release is found, the badge falls back to "Check GitHub Releases for downloads".

## Design

- **Dark theme only** — matches the desktop app's dark mode
- **Color tokens** defined in `css/style.css` `:root` and `DESIGN.md`
- **Font**: Arial (matching the desktop app)
- **Screenshot-first** — images lead, text supports
- **Feature containers** use `width: fit-content` to shrink-wrap images

## Hosting

Deployed via **GitHub Pages** from this repo's `main` branch.

### Setup
1. Push this repo to GitHub
2. Go to Settings → Pages → Source: `main` branch, `/ (root)`
3. Site available at `https://<username>.github.io/PsCafeManagmentSystem-Website/`

### Custom Domain
Add a `CNAME` file with your domain name, then configure DNS on your registrar.

## Release Workflow

1. Build the desktop app (`build.bat` / `build.sh` in the main project)
2. Zip the `dist/PS-Cafe-Manager/` folder:
   - Windows: `PS-Cafe-Manager-windows.zip`
   - Linux: `PS-Cafe-Manager-linux.tar.gz`
3. Create a GitHub Release on this repo with a tag (e.g., `v1.0.0`)
4. Attach both archives as release assets
5. The website auto-updates download links via the GitHub API

## Language (i18n)

The site supports English and Macedonian via a toggle button in the navbar.

- All translatable text uses `data-i18n="key"` attributes in `index.html`
- Translations are stored in the `translations` object in `js/main.js`
- Language preference is saved in `localStorage` under `pscafe-lang`
- Default language is English (`en`)
- To add a new string: add a `data-i18n` attribute in HTML, then add the key to both `en` and `mk` objects in `main.js`
- To add a new language: add a new key to the `translations` object and update the toggle logic

## Conventions

- **No frameworks** — vanilla HTML/CSS/JS only
- **No build tools** — edit and refresh
- **Dark theme only** — no light mode toggle
- **CSS variables** for all colors — never hardcode hex in component styles
- **No comments** unless necessary for future maintainers
- **Responsive** — mobile breakpoint at 768px
- **Screenshots in WebP** format

## Gotchas

- The GitHub Releases API has a rate limit (60 requests/hour unauthenticated). For a low-traffic site this is fine. If needed, add a `?client_id=...` parameter or use a personal access token
- GitHub Pages serves from the repo root — if you move the site to a subfolder, update relative paths in `index.html`
- Feature screenshot containers shrink-wrap to image size via `width: fit-content` — no need to resize images to match a fixed container
