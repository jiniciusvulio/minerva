# Implementation prompt: Set Minerva main content width

## Goal
Adjust the homepage's main content wrapper so its maximum width is approximately 1440px on wide screens, while retaining the existing responsive gutters and inner layout constraints.

## Relevant context inspected
- `app/page.tsx` contains the homepage and its shared outer wrapper.
- The wrapper currently uses `mx-auto max-w-[1270px]`; the hero and search have separate narrower inner widths.
- `app/globals.css` does not define a competing page-width rule.
- `AGENTS.md` requires reading the relevant Next.js guide before editing code.

## Decisions and assumptions
- Interpret "main content" as the outer homepage content wrapper, including the header, hero, and course sections.
- Change only the outer maximum width from 1270px to 1440px. Preserve gutters, responsive behavior, and all inner max-widths.
- No design skill is needed for this targeted width adjustment; follow the installed Next.js documentation and current project conventions.

## Expected files to touch
- `app/page.tsx`

## Security considerations
- None; this is a presentational CSS utility change.

## Acceptance criteria
- On wide viewports, the outer homepage content can grow to approximately 1440px and remains centered.
- Existing horizontal gutters and the narrower hero/search content remain unchanged.
- Smaller viewports remain responsive without horizontal overflow.

## Checks to run
- Run `npm run lint`.
- Run `npm run build`.

## Manual test steps
1. Start the app with `npm run dev`.
2. At a viewport wider than 1440px, verify the page content is centered and reaches about 1440px wide.
3. At a narrower viewport, verify the existing side gutters and layout remain intact.
