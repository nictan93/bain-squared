# Bain Squared

Marketing site for Bain Squared — a Singapore-headquartered growth consultancy working across intangibles & ESOP valuation, fractional CFO & financial transformation, and agentic AI automation.

## Stack

- **Framework:** React 18 + Vite
- **Routing:** wouter (hash routing)
- **Styling:** Tailwind CSS + custom CSS tokens
- **Typography:** Inter (body), Bitter (display serif)
- **Backend:** Express (currently unused — site deploys as static SPA)

## Local development

```bash
npm install
npm run dev
```

Dev server runs on the port configured in `vite.config.ts` / `script/build.ts`.

## Build

```bash
npm run build
```

Outputs:
- `dist/public/` — static client bundle (this is what gets deployed)
- `dist/index.cjs` — Express server bundle (optional, not used for static deploys)

## Deploy

The site is deployed as a static SPA from `dist/public`. See `vercel.json` for the SPA rewrite rule.

## Project structure

```
client/
  src/
    pages/        # Route components (Home, Reviews, FAQ, etc.)
    components/   # Reusable UI components
    data/         # Static content (reviews, FAQ, legal copy, insights)
    lib/          # Utilities
    index.css     # Brand tokens + global styles
server/           # Express server (unused for static deploy)
script/build.ts   # Build orchestrator
```

## Brand tokens

Defined in `client/src/index.css`:

- `--bs-canvas: #F7F5F2`
- `--bs-forest-deep: #174C3C`
- `--bs-forest-accent: #BBD3CF`
- `--bs-ink: #1A1A1A`
- `--bs-ink-muted: #5A5A5A`
- `--bs-hairline: #E5E5E5`

Zero border-radius globally. US English copy. No em dashes.
