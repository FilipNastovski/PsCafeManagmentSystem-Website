# PsCafeManagmentSystem-Website — Design System

## Overview

Dark-only static website design for the PlayStation Café Management System. Color tokens are derived from the desktop app's dark theme (`DESIGN.md` in the main project) to maintain visual consistency between the app and its website.

---

## Color Tokens

All tokens are defined as CSS custom properties in `css/style.css` under `:root`.

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-page` | `#161d21` | Page background |
| `--bg-surface` | `#263238` | Cards, Navbar, panels |
| `--bg-input` | `#37474F` | Input fields, badges, code blocks |
| `--text-primary` | `#ECEFF1` | Headings, primary labels |
| `--text-secondary` | `#B0BEC5` | Body text, descriptions |
| `--text-muted` | `#78909C` | Helper text, notes, placeholder |
| `--border-card` | `#37474F` | Card borders, section dividers |
| `--accent-green` | `#4CAF50` | Primary CTA buttons, step numbers, check marks |
| `--accent-green-hover` | `#43A047` | Primary button hover |
| `--accent-blue` | `#2196F3` | Requirement card titles, code text |
| `--accent-blue-dark` | `#1976D2` | (reserved for future use) |
| `--accent-slate` | `#607D8B` | Secondary CTA buttons |
| `--accent-slate-hover` | `#546E7A` | Secondary button hover |

---

## Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Page title (h1) | Arial | 40px | Bold |
| Section title (h2) | Arial | 28px | Bold |
| Feature heading (h3) | Arial | 22px | Bold |
| Card heading (h3) | Arial | 20px | Bold |
| Body text (p) | Arial | 14px | Normal |
| Nav links | Arial | 14px | Normal |
| Small text / notes | Arial | 12-13px | Normal |
| Nav logo | Arial | 20px | Bold |

### Responsive Typography

| Breakpoint | Change |
|------------|--------|
| ≤768px | h1 → 28px, h2 → 24px, body → 13px |

---

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Section padding | 80px vertical, 24px horizontal | All sections |
| Section title margin-bottom | 48px | Below h2 |
| Feature row gap | 48px | Between screenshot and text |
| Feature row margin-bottom | 64px | Between feature rows |
| Card padding | 32px 24px | Download cards |
| FAQ item gap | 12px | Between FAQ items |
| Step gap | 32px | Between steps |

### Responsive Spacing

| Breakpoint | Change |
|------------|--------|
| ≤768px | Section padding → 48px vertical, 16px horizontal |

---

## Component Styles

### Navbar

```css
height: 64px;
background: var(--bg-surface);
border-bottom: 1px solid var(--border-card);
position: fixed;
```

### Buttons

| Type | Background | Hover | Text |
|------|-----------|-------|------|
| Primary (`.btn-primary`) | `var(--accent-green)` | `var(--accent-green-hover)` | `#fff` |
| Secondary (`.btn-secondary`) | `var(--accent-slate)` | `var(--accent-slate-hover)` | `#fff` |

Border radius: 6px, padding: 12px 28px, font-size: 14px bold.

### Cards

```css
background-color: var(--bg-surface);
border: 2px solid var(--border-card);
border-radius: 8px;
```

### Screenshots

```css
border: 2px solid var(--border-card);
border-radius: 8px;
overflow: hidden;
background-color: var(--bg-surface);
```

Hero screenshot: max-width 960px, centered, img width 100%.
Feature screenshots: `width: fit-content`, `margin: 0 auto` — containers shrink-wrap to image size and center within the grid column.

### FAQ Accordion

```css
background: var(--bg-surface);
border: 1px solid var(--border-card);
border-radius: 8px;
```

Question: 16px 20px padding, 15px bold text.
Answer: max-height 0 → 200px on open, 14px secondary text.

### Release Badge

```css
background: var(--bg-input);
border: 1px solid var(--border-card);
border-radius: 20px;
padding: 6px 16px;
font-size: 13px;
color: var(--text-muted);
```

### Language Toggle

```css
padding: 6px 12px;
background: none;
border: 1px solid var(--border-card);
border-radius: 4px;
font-size: 13px;
font-weight: bold;
color: var(--text-secondary);
```

Hover: `color: var(--text-primary)`, `border-color: var(--text-muted)`.
Shows "MK" when in English, "EN" when in Macedonian.

---

## Layout

| Breakpoint | Layout |
|------------|--------|
| >768px | Desktop — 2-column grids, alternating feature rows |
| ≤768px | Mobile — single column, stacked feature rows, hamburger nav |

### Max Width

`--max-width: 1200px` — applied to sections.

---

## Screenshot Guidelines

| Screenshot | Recommended Width | Notes |
|------------|------------------|-------|
| Hero | 960px | Full dashboard with multiple device cards visible |
| Feature | 600px | Focus on the specific UI element being described |
| Step | 400px | Clear, focused on the action |

Format: WebP. Use the app's dark theme when capturing. Feature screenshot containers shrink-wrap to image size, so varying aspect ratios are handled gracefully.

---

## Notes

- Dark theme only — no light mode toggle
- Language toggle: English / Macedonian, preference saved in localStorage
- All colors use CSS custom properties — never hardcode hex in component styles
- Semantic colors (green for CTAs, blue for info) match the desktop app
- The website design is intentionally minimal — screenshots are the primary content, text is secondary support
- Feature screenshots use `width: fit-content` so containers adapt to each image's natural size
