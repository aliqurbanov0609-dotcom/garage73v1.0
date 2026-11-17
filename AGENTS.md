# GARAGE 73

## Architecture

A TanStack Start / React 19 / TypeScript public gastro-pub menu deployed on Netlify. Continue from `PLAN.md`; milestone 1 is the polished interactive surface. There are no backend APIs, auth or database in this milestone.

- `src/routes/index.tsx`: product screens and navigation stack, localization selection, timed loading, press interaction.
- `src/data/menu.ts`: the single fixture catalog, multilingual descriptions and UI strings. All catalog entries and prices are samples pending owner approval.
- `src/styles.css`: Barlow / Barlow Condensed / Russo One typography, mobile and desktop compositions, cool bar / warm kitchen tokens, animation and reduced-motion rules.
- `src/routes/__root.tsx`: HTML shell and product metadata.
- `public/img`: generated static assets and food photography; serve via Netlify Image CDN.

## Conventions

All actionable cards must be native buttons with the entire area clickable. Do not use overlay buttons. Inner arrow indicators are decorative spans. Final drink cards are noninteractive articles, per the latest user specification. Long press is a decorative CSS effect, not a liquid shader.

BACK pops the navigation stack. HOME clears it and opens language selection. The app starts directly at language selection (AZ / EN / RU). Loading takes 1.8 seconds, is noninteractive and is not retained in the history stack. Dish and brand names remain English constants; translate all surrounding interface and description text.

All browser-only access belongs in effects. Keep SSR initial state deterministic. Support focus-visible, accessible labels, touch targets and reduced motion. Do not persist temporary navigation or effects. Future persisted catalogs must use Netlify platform storage.

The car splash has been removed. Do not reintroduce it. Do not describe the long-press tint as a shader.

## Development

Install with `pnpm install`; local Netlify emulation uses `netlify dev --port 8889`. The platform pipeline performs builds and validation. Do not manually run build, typecheck, test or server commands during managed implementation runs. Read changed files to verify edits. Do not inspect `.git` or print environment values.
