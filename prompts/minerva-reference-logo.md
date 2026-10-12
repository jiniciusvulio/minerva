# Implementation prompt: Match the homepage logo reference

## Goal
Replace the current homepage brand mark with the botanical emblem shown in `design/minerva_home.png`.

## Relevant context inspected
- `design/minerva_home.png` shows a green botanical emblem to the left of the `minerva` wordmark.
- `app/page.tsx` defines the current M-shaped mark in the `MinervaMark` component, followed by a separate lowercase wordmark.
- `app/page.tsx` is the only expected code surface for this change.
- No dedicated logo asset is present in the page implementation.

## Decisions and assumptions
- Treat the attached reference image as the source of truth for the emblem's silhouette and green color.
- Replace only the `MinervaMark` graphic; keep the existing wordmark, header spacing, and overall 28px icon dimensions.
- Build a lightweight inline SVG matching the emblem, consistent with the existing icon implementation.
- No design or domain skill is needed; inspect the installed Next.js SVG/JSX guidance before editing.

## Expected files to touch
- `app/page.tsx`

## Security considerations
- None; this is a static inline graphic.

## Acceptance criteria
- The header displays a green botanical emblem matching the reference instead of the current M-shaped mark.
- The existing `minerva` wordmark, layout, and responsive behavior remain unchanged.
- Lint and production build succeed.

## Checks to run
- Run `npm run lint`.
- Run `npm run build`.
- Inspect the homepage at `http://localhost:3000` against `design/minerva_home.png`.

## Manual test steps
1. Open the homepage at `http://localhost:3000`.
2. Compare the top-left emblem silhouette, green color, and spacing with `design/minerva_home.png`.
3. Confirm the wordmark remains adjacent and the header layout is unchanged at desktop and narrow widths.
