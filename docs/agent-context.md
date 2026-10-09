# Project context
Updated: 2026-10-09 | Branch: main | Checked at: 53ebdcc (repository bootstrap)
Working tree: initial implementation in `src/`, build configuration, and docs; verified before the implementation commit.

## Purpose and shape

Orbitku's Indonesian landing page explains a future creator/VTuber hub and offers an interactive product simulation. The repository started empty. It is a standalone React + TypeScript + Vite static frontend, separate from the existing Orbitku product frontend, backend, and Supabase projects. It does not authenticate users or fetch real YouTube content.

## Architecture and boundaries

`index.html` → `src/main.tsx` → `src/App.tsx` → focused section components. `App` owns the prospective fan/creator role; workflow and dashboard components own their local simulation state. `src/data/creators.ts` is the authoritative fictional dataset. `EarlyAccess.tsx` optionally POSTs email, role, and consent to `VITE_WAITLIST_ENDPOINT`; no backend is bundled. Without a valid same-origin path or HTTPS endpoint, email is disabled and submission explains that registration is not open. Never present a successful registration until the receiver returns 2xx. No email or follow state is persisted in localStorage.

## Conventions and commands

Node.js 24 is recorded in `.nvmrc`; npm with committed lockfile. Run `npm ci`, `npm run dev`, `npm run lint`, `npm run typecheck`, and `npm run build`. `npm run preview` serves the production output. For environments with restricted network-interface discovery, pass `-- --host 127.0.0.1` to the dev command. GitHub CI runs lint and build.

Use semantic native elements, visible focus states, accessible tab keyboard interactions, and reduced-motion support. Motion is CSS plus one IntersectionObserver hook; no animation dependency. Fonts are bundled locally through Fontsource; icons use Lucide plus small native SVGs. Styling uses CSS layers and shared custom properties; responsive rules cover 1150px, 850px, and 600px. Do not add dependencies for simple effects already covered by CSS.

## File map

| Concern | Entry points | Notes |
| --- | --- | --- |
| Composition | `src/App.tsx` | Page order and access role |
| Hero preview | `Hero.tsx`, `DashboardPreview.tsx` | Filter and expand example rows |
| Product flow | `Workflow.tsx` | Discover → follow → dashboard; empty state |
| Creator CTA | `CreatorSection.tsx` | Selects creator role at access form |
| Access form | `EarlyAccess.tsx`, `.env.example` | Optional external receiver, honest default |
| Layout/motion | `src/styles.css`, `useScrollReveal.ts` | Tokens, breakpoints, observer cleanup |
| Design | `docs/design.md` | Copy, geometry, intentional refinements |

## Decisions and constraints

- User requested a modern animated Orbitku landing page in `wahyuazizi/landingpage_orbitku`, using Build Web Apps and GitHub (2026-10-09).
- Marketing copy must reflect early development and planned features. Sample creator/live data is labelled; no invented traction.
- Deploy as static `dist/`; relative Vite base supports repository subpaths. Hosting, custom domain, company email, and waitlist receiver are not provisioned.
- Keep this repository independent of production auth and private credentials. `VITE_*` values are public build configuration.
