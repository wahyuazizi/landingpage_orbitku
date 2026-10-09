# Orbitku design system

## Direction and page flow

Midnight navy, large geometric typography, and restrained orbital linework. All shipped visuals are code-native geometry or monogram avatars; no generated character illustration is used. Design references were generated separately for the hero, workflow/profile continuation, and access/footer.

Page order: header → hero with interactive dashboard → three-step workflow → creator profile preview → early access → footer. The product is in development. Live states and creator names in demonstrations are explicitly sample data. Do not introduce user counts, launch claims, pricing, or testimonials without evidence.

## Tokens

| Role | Value |
| --- | --- |
| Background | `#101727` |
| Surface | `#151e30` |
| Primary text | `#f6f8ff` |
| Secondary text | `#a2abc0` |
| Accent | `#94a8ff` |
| Borders | `#2a354b` |
| Headlines | Space Grotesk Variable, 600–650 weight, tight tracking |
| Body and controls | Inter Variable |
| Desktop gutter | 5% each side; max width 1340px |
| Mobile gutter | 20px each side |
| CTA | Accent fill, navy text, arrow icon; pill in hero/workflow, 8px radius in form |

Hero: open two-column composition, three-line heading, muted explanation, primary and secondary anchor actions, development notice, dashboard frame, floating schedule, elliptical native outlines. No eyebrow above the heading. Background stays midnight navy with no tint layer or raster media.

Hero copy lock: `orbitku`, `Cara kerja`, `Untuk kreator`, `Akses awal`; `Kreator favoritmu. Satu semesta. Lebih dekat.`; `Tempat untuk mengikuti kabar, jadwal live, dan karya kreator yang kamu suka. Tanpa berpindah-pindah platform.`; `Jelajahi Orbitku`; `Lihat cara kerja`; `Sedang dikembangkan. Dibangun untuk kreator dan penggemar.`; `Kabar terbaru. Jadwal live. Kreator favorit.`. Preview labels include `Semestamu`, `Semua`, `Live`, `Terjadwal`, and sample creator data.

Workflow: open heading row; horizontal step rail; one explanation and one interactive preview region; separator; creator profile on left and explanation on right. On small screens the profile follows its explanation. Creator tiles use filled monogram circles, not illustrated portraits.

Early access: two-column open layout with an outlined orbit behind the form. Heading `Jadi bagian dari orbit pertama.`; role switch; email field; CTA; integration status; roadmap line; footer. Until the endpoint is configured, email entry remains disabled and the CTA reveals the current status. Configured states add a consent checkbox, pending state, error state, and confirmed success only after HTTP 2xx.

## Icons and motion

Lucide outline arrows, calendar, play, check, heart, info, menu, and chevrons use 1.5–2px visual stroke weight. Wordmark orbit and YouTube mark are simple native SVG. Preview profile link labels are noninteractive because their destinations are sample data.

Orbital dots and floating schedule provide gentle continuous motion. UI changes use 180–350ms transitions; section reveal uses 650ms opacity/translation. No scroll hijacking. All animation and smooth scrolling are disabled for `prefers-reduced-motion: reduce`. Hover lift is restrained. Keyboard focus stays visible.

## Intentional functional refinements

Reference refinements: add explicit `data contoh` captions to prevent sample live states being read as actual streams; omit decorative search/bell controls that have no function; use a small orbital glyph instead. Expose keyboard-friendly step navigation and real follow/filter state. Enable only the email behavior backed by a configured receiver.
