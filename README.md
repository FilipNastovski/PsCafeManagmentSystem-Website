# PsCafeManagmentSystem-Website

Static single-page website for the PlayStation Café Management System desktop app. Hosted on GitHub Pages.

## Quick Start

```bash
# Preview locally
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. No build step, no dependencies.

## Project Structure

```
├── index.html          # Single page, all sections, data-i18n attributes for translations
├── css/
│   └── style.css       # Dark theme, responsive, CSS custom properties
├── js/
│   └── main.js         # Nav toggle, FAQ accordion, language toggle (EN/MK), GitHub Releases API
├── screenshots/        # App screenshots (WebP)
└── .gitignore
```

## Development

### Editing

- **HTML**: All translatable text uses `data-i18n="key"` attributes
- **CSS**: Color tokens in `:root`, responsive breakpoint at 768px
- **JS**: No build step, edit and refresh

### Adding Translations

1. Add `data-i18n="your_key"` to any HTML element
2. Add the key to both `en` and `mk` objects in `js/main.js`
3. If adding a new language, extend the `translations` object and update the toggle logic in `main.js`

### Adding Screenshots

Replace the files in `screenshots/` with actual WebP captures from the desktop app. Filenames are already referenced in `index.html`.

| File | Section |
|------|---------|
| `hero-dashboard.webp` | Hero |
| `feature-dashboard.webp` | Features — Dashboard |
| `feature-sessions.webp` | Features — Sessions |
| `feature-billing.webp` | Features — Billing |
| `feature-alerts.webp` | Features — Alerts |
| `feature-reports.webp` | Features — Reports |
| `feature-devices.webp` | Features — Devices |
| `step-1-download.webp` | Getting Started — Step 1 |
| `step-2-run.webp` | Getting Started — Step 2 |
| `step-3-session.webp` | Getting Started — Step 3 |

## GitHub Releases Integration

The site fetches the latest release from the GitHub API on page load. It expects release assets with `windows` or `linux` in the filename.

### Creating a Release

1. Build the desktop app (`build.bat` / `build.sh`)
2. Zip the `dist/PS-Cafe-Manager/` folder:
   - `PS-Cafe-Manager-windows.zip`
   - `PS-Cafe-Manager-linux.tar.gz`
3. Create a GitHub Release on this repo with a tag (e.g., `v1.0.0`)
4. Attach both archives as release assets
5. The site auto-updates download links and version badge

### API Endpoint

```
https://api.github.com/repos/FilipNastovski/PsCafeManagmentSystem-Website/releases/latest
```

Unauthenticated rate limit: 60 requests/hour. Fine for a low-traffic site.

## Deployment

### GitHub Pages

1. Push to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Site available at `https://<username>.github.io/PsCafeManagmentSystem-Website/`

### Custom Domain

Add a `CNAME` file with your domain, then configure DNS on your registrar.

## Design

- Dark theme only, tokens from `DESIGN.md`
- Color tokens in `css/style.css` `:root` — never hardcode hex in component styles
- Font: Arial
- Screenshot-first layout, text is secondary
- Feature screenshot containers shrink-wrap to image size (`width: fit-content`)

## Conventions

- No frameworks, no build tools
- CSS variables for all colors
- No comments unless necessary
- Responsive at 768px
- Screenshots in WebP format
