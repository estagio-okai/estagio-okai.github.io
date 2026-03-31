# OK IA — reference for sites (tokens, type, theme mapping)

Authoritative brand source: [Manual de Identidade Visual OK IA](https://okinteligenciaartificial.com.br/manual-marca/).

Theme tooling: [tweakcn.com](https://tweakcn.com/) — generate or refine shadcn-compatible CSS variables, then merge into the project’s global theme (e.g. `app/globals.css`).

---

## Colors

### Principais

| Name | Hex | RGB | CMYK (approx.) | Usage |
|------|-----|-----|----------------|--------|
| Verde primário | `#1DB954` | 29, 185, 84 | 84, 0, 55, 27 | CTAs, primary buttons, main icons, key titles accents |
| Cinza escuro | `#2C2C2C` | 44, 44, 44 | 0, 0, 0, 83 | Body text, dark backgrounds, structural UI |

### Secundárias

| Name | Hex | RGB | CMYK (approx.) | Usage |
|------|-----|-----|----------------|--------|
| Verde secundário | `#34D46D` | 52, 212, 109 | 76, 0, 49, 17 | Gradients, secondary fills, variation on primary green |

### Eventual (limited)

| Name | Hex | RGB | CMYK (approx.) | Usage |
|------|-----|-----|----------------|--------|
| Roxo | `#7B2CBF` | 123, 44, 191 | 36, 77, 0, 25 | Occasional accent only—decorative, small highlights, not primary actions |

### Neutrals

| Name | Hex | RGB | CMYK (approx.) | Usage |
|------|-----|-----|----------------|--------|
| Cinza claro | `#F8F9FA` | 248, 249, 250 | 1, 0, 0, 2 | Alternate light backgrounds, sections, separators |
| Branco | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | Primary light background; text on dark |

---

## Typography

### Families

- **Poppins** — titles, headings, display emphasis (weights 400–800 as needed).
- **Inter** — body, menus, buttons, captions (weights 400–700 as needed).

Load via `next/font/google` and expose as CSS variables or utility classes on `body` / heading elements.

### Hierarchy (from manual)

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|--------|
| H1 | Poppins | 32–48px | Bold (700) | Responsive: larger on desktop |
| H2 | Poppins | 24–32px | SemiBold (600) | |
| H3 | Poppins | 20–24px | Medium (500) | |
| Body | Inter | 16px | Regular (400) | |
| Secondary text | Inter | 14px | Regular (400) | |
| Captions | Inter | 12px | Regular (400) | |

Map to Tailwind/shadcn patterns (e.g. `text-base`, `text-sm`, `text-xs`, custom `text-h1` in `@layer` if useful) while keeping these ranges.

---

## Suggested mapping: OK IA → shadcn semantic tokens (tweakcn)

Use tweakcn to set **light** (and **dark** if the site has a dark mode) so components pick up tokens automatically. Adjust names to match the project’s `components.json` / Tailwind v4 vs v3 setup—the intent is semantic, not literal hex pasting into wrong slots.

| OK IA role | Typical shadcn / CSS token | Notes |
|------------|----------------------------|--------|
| Verde primário | `--primary`, primary foreground white or near-white on buttons | Primary actions |
| Cinza escuro | `--foreground`, `--card-foreground` | Main text |
| Branco / cinza claro | `--background`, `--muted`, `--secondary` (subtle) | Sections: alternate `background` vs `muted` |
| Verde secundário | gradient stops, or `--secondary` if used for soft fills | Prefer gradients between `#1DB954` and `#34D46D` for hero accents |
| Roxo | `--accent` or custom `--brand-purple` + scoped utilities | **Rare**; avoid making `--primary` purple |
| Destructive actions | keep shadcn **destructive** red (not in brand manual) | Use only for real errors/destructive confirmations; do not replace brand green |

After export from tweakcn:

1. Merge variables into the app’s global stylesheet without breaking existing `@tailwind` / `@theme` blocks.
2. Re-run shadcn component usage and fix contrast (primary foreground, muted text on `muted` backgrounds).
3. Verify focus rings remain visible (accessibility).

---

## Voice and tone (content)

When writing Portuguese copy for OK IA sites, align with the manual: **inovadora**, **confiável**, **amigável mas profissional**, **focada em resultados**—concrete metrics where appropriate, no hype that contradicts facts.

---

## Logo usage (summary)

From the manual: clear space ~**20% of logo height**; no distortion, no unapproved colors, no drop shadows, no busy backgrounds that harm legibility, no rotation. Prefer provided logo assets from the brand site when available.
