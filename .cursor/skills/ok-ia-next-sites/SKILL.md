---
name: ok-ia-next-sites
description: >-
  Builds modular multipage marketing sites with Next.js App Router, shadcn/ui,
  static export for GitHub Pages, OK IA brand tokens, and tweakcn-generated
  themes. Use when creating or extending Next.js sites for OK Inteligência
  Artificial, GitHub Pages deployment, shadcn/ui, manual da marca compliance,
  or multipage static sites with client-side interactivity and light animation.
---

# Sites OK IA (Next.js + shadcn + GitHub Pages)

## When to apply

Use this skill for **new or existing** Next.js projects that must:

- Follow the [OK IA manual de marca](https://okinteligenciaartificial.com.br/manual-marca/) for color and typography.
- Use **shadcn/ui** and align the theme with [tweakcn.com](https://tweakcn.com/).
- Ship as **static HTML** via **`output: 'export'`** for **GitHub Pages**.
- Stay **modular** (shared layouts, section components), **multipage**, and optionally **interactive** on the client with **subtle animations**.

For full token tables and suggested CSS variable mapping, read [reference.md](reference.md) before implementing theme and typography.

## Workflow checklist

Copy and track:

```
- [ ] Confirm repo name → basePath/assetPrefix if not user.github.io root
- [ ] next.config: output: 'export', images, basePath as needed
- [ ] Fonts: Poppins + Inter via next/font/google in root layout
- [ ] Theme: tweakcn → paste variables into globals.css; map to OK IA tokens
- [ ] shadcn: add needed primitives to components/ui; compose in components/
- [ ] Routes: app/ structure, nested layouts, Link navigation
- [ ] Brand pass: colors, type scale, limited purple accent
- [ ] Client interactivity: mark 'use client' only where needed
- [ ] Animations: Tailwind/CSS first; Framer Motion only if justified
- [ ] Build: next build completes static export without forbidden APIs
```

## Brand rules (non-negotiable)

- Use only the palette and roles defined in [reference.md](reference.md). **Do not** invent a parallel palette.
- **Purple (`#7B2CBF`)** is **occasional accent** only (badges, small highlights, decorative flourishes)—not primary CTAs or large surfaces.
- **Primary green (`#1DB954`)** for primary buttons, key icons, and main highlights.
- **Dark gray (`#2C2C2C`)** for body text on light backgrounds and dark structural backgrounds.
- Ensure **contrast** and **logo-safe** backgrounds (legibility over decoration).

## Stack and order of work

1. **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**.
2. **shadcn/ui** in `components/ui` (install components as needed; do not duplicate primitives).
3. **tweakcn.com**: tune theme visually, export theme tokens, merge into `app/globals.css` (or the project’s global styles) so shadcn semantic tokens (`primary`, `background`, `foreground`, `muted`, `accent`, `card`, `destructive`, etc.) match OK IA. See mapping hints in [reference.md](reference.md).
4. **Fonts**: `Poppins` for headings, `Inter` for body, UI, and captions—weights and sizes per [reference.md](reference.md).

## GitHub Pages + static export

Configure `next.config` (or `next.config.ts`):

- `output: 'export'` — required for static hosting.
- `images: { unoptimized: true }` — typical for GitHub Pages unless another image pipeline is agreed.
- If the site is served from **`https://<user>.github.io/<repo>/`**, set `basePath: '/<repo>'` and matching `assetPrefix` so assets and `Link` hrefs resolve.
- **Avoid** at build/export time: dynamic routes without `generateStaticParams`; server-only dynamic features per request (`headers()`, `cookies()`, uncached `fetch` expecting per-user SSR).

**“Dynamic” in this setup** means: React **client** state, browser `fetch` to **public** APIs, forms, toggles, carousels, and animations—not server rendering per request.

## Modular multipage structure

Recommended layout:

- `app/layout.tsx` — root: fonts, theme class on `<html>`, shell providers if any.
- `app/(site)/layout.tsx` — shared chrome: header, footer, main wrapper.
- `app/(site)/page.tsx`, `app/(site)/sobre/page.tsx`, etc. — one folder per route.
- `components/layout/` — `SiteHeader`, `SiteFooter`, `Nav`.
- `components/sections/` — `Hero`, `FeatureGrid`, `CtaBand`, etc.
- Optional `content/*.json` (or MDX if already configured) for lists and copy—keep presentation in components.

Use `next/link` for internal navigation; keep URLs readable (`/cursos`, `/contato`).

## Client components and data

- Add `'use client'` only to files that need hooks, event handlers, or browser-only APIs.
- Prefer **server components** for static markdown-like sections when they need no interactivity (smaller client bundle).
- For data: static JSON in the repo, or `fetch` in client components to **public** HTTPS endpoints; handle loading and error UI.

## Animations

1. **Default**: Tailwind transitions, `tailwindcss-animate` (if present), CSS keyframes—keep motion **short** and **purposeful**.
2. **Optional**: `framer-motion` for staggered reveals or scroll-linked effects—use only when the UX benefit outweighs bundle size; lazy-load heavy demos if needed.

Do not rely on animation for essential information (accessibility).

## Quality gate before finishing

- [ ] All primary actions read as OK IA green; purple appears sparingly.
- [ ] Heading font is Poppins; body is Inter; sizes align with hierarchy in [reference.md](reference.md).
- [ ] `next build` succeeds with static export and no missing asset paths (check `basePath`).
- [ ] No shadcn theme colors that contradict the manual.

## References

- [reference.md](reference.md) — tokens, type scale, tweakcn → theme mapping.
- [Manual da marca OK IA](https://okinteligenciaartificial.com.br/manual-marca/)
- [tweakcn — theme editor for shadcn/ui](https://tweakcn.com/)
- [Next.js static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
