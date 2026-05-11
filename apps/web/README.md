# VibeKit Web Marketing Site

> Landing site for VibeKit Framework. Domain: **vibekit.desishub.com**

Built with the VibeKit stack eating our own dog food.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5.9**
- **Tailwind CSS v4**
- **next-themes** dark + light mode
- **react-three-fiber + three.js** hero canvas
- **GSAP + ScrollTrigger** text reveals + scroll animations
- **lucide-react** icons
- Fonts: **Instrument Serif** (display), **Inter** (body), **JetBrains Mono** (code)

## Local development

```bash
cd web
pnpm install            # or npm install / yarn / bun install
cp .env.example .env.local
pnpm dev                # http://localhost:3000
```

## Build

```bash
pnpm build
pnpm start
```

## Project structure

```
web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← root layout, fonts, metadata, JSON-LD
│   │   ├── page.tsx            ← landing page (assembles all sections)
│   │   ├── not-found.tsx       ← 404
│   │   ├── sitemap.ts          ← /sitemap.xml
│   │   ├── robots.ts           ← /robots.txt
│   │   └── globals.css         ← design tokens (light + dark)
│   ├── components/
│   │   ├── nav.tsx
│   │   ├── hero.tsx            ← GSAP text reveal + canvas
│   │   ├── hero-canvas.tsx     ← three.js icosahedron + particle lattice
│   │   ├── section.tsx         ← reusable section wrapper with scroll-trigger
│   │   ├── problems.tsx        ← 13 pain cards
│   │   ├── how-it-works.tsx    ← 7-step workflow
│   │   ├── four-files.tsx      ← project-description / phases / style guide / prompt
│   │   ├── stack.tsx           ← 17-row tech stack table
│   │   ├── framework-files.tsx ← repo file tree + copy-into-project list
│   │   ├── pre-deploy.tsx      ← pre-deploy review section
│   │   ├── jb-registry.tsx     ← JB component registry overview
│   │   ├── cta.tsx             ← bottom CTA
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   └── ui/button.tsx
│   └── lib/utils.ts            ← cn() + SITE constants
├── public/
│   ├── favicon.svg
│   └── og.png                  ← TODO: generate with docs/og-image-prompt.md
└── docs/
    └── og-image-prompt.md      ← Gemini prompt for the OG image
```

## SEO

- **Sitemap** at `/sitemap.xml` (auto-generated)
- **Robots** at `/robots.txt`
- **OpenGraph + Twitter cards** in `app/layout.tsx`
- **JSON-LD structured data** (`WebSite` + `SoftwareApplication`) in `<head>`
- **Theme color** for both light + dark
- Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (defaults to `https://vibekit.desishub.com`)

## OG image

Run the prompt in `docs/og-image-prompt.md` through Gemini / Imagen / Midjourney. Save the result as `public/og.png` (1200×630).

## Deploy

```bash
# Vercel
vercel link
vercel env add NEXT_PUBLIC_SITE_URL    # https://vibekit.desishub.com
vercel deploy --prod
```

Then point the `vibekit` Cloudflare DNS CNAME at the Vercel target (or A-record with Vercel's IPs).

## Adding new pages

This is a single-page site by design (the README + docs live in the GitHub repo). To add SEO-targeted blog or comparison pages later:

1. Create `src/app/blog/page.tsx`, `src/app/compare/[slug]/page.tsx`, etc.
2. Add their URLs to `src/app/sitemap.ts`.
3. Reuse the `<Section>` wrapper for consistent layout + scroll animations.

## License

MIT.
