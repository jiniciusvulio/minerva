# Implementation prompt: Minerva design system matching reference

## Goal
Build the Minerva design-system page in the `/app` route so it visually matches the supplied reference image at `design/minerva_designsystem.png` as closely as possible while staying in a clean, maintainable Next.js app.

## Scope
- Recreate the single-page design system shown in the reference.
- Match the composition, spacing, typography, colors, borders, and card styles in the reference.
- Keep the implementation lightweight and static unless a small component pattern is needed for clarity.
- Prefer Tailwind utility classes and minimal custom CSS. Do not overbuild beyond the reference.

## Relevant context inspected
- This repository is a fresh Next.js app using the App Router.
- The page entry point is `app/page.tsx` and the global styling is in `app/globals.css`.
- The design reference lives at `design/minerva_designsystem.png` and contains the full Minerva system, including:
  - brand header and intro
  - colors
  - typography
  - spacing scale
  - radius and shadows
  - icon system
  - buttons and inputs
  - badges and tags
  - cards
  - navigation and principles

## Decisions and assumptions
- This is a front-end implementation only; no backend or CMS integration is needed.
- The page should be built as a static design-system showcase, not as interactive app logic.
- Use a neutral off-white page background with deep green accents and dark charcoal type to match the reference.
- The typography should mimic the reference through careful sizing, letter spacing, weight, and serif/sans combinations.
- Use inline SVG or CSS-drawn simple icons for the icon grid instead of importing external libraries.
- The cards and panels should be visually subtle, with soft borders, moderate radii, and restrained shadows.

## Expected files to touch
- `app/page.tsx`
- `app/globals.css`
- possibly `app/layout.tsx` if metadata or body treatment needs a small update

## Requirements
- Keep the page responsive enough for smaller widths by allowing the multiple columns to stack naturally.
- Preserve the exact desktop composition of the reference as the primary goal.
- Use semantic section structure with headings and labels, but keep the code simple.
- Ensure the page looks polished and consistent without introducing unnecessary animations or complex components.

## Security considerations
- None beyond keeping the page static and avoiding external data fetching.

## Acceptance criteria
- The page visually matches the supplied design system reference closely enough to be considered a faithful implementation.
- The branded Minerva wordmark, large serif title, and muted layout are reproduced.
- All color swatches, font scale rows, buttons, badges, cards, and navigation elements appear in the same structure as the reference.
- The final page renders cleanly with no console or CSS errors.

## Checks to run
- Run `npm run lint`.
- Run `npm run build` because the app route and styling are changing.
- Optionally run `npm run dev` to confirm the page renders locally.

## Manual test steps
1. Start the app with `npm run dev`.
2. Open the home page in the browser.
3. Verify the design matches the reference across the sections: color palette, typography, spacing, buttons, cards, navigation, and principles.
4. Resize to a narrower browser width and confirm the layout remains readable and stacked sensibly.

## Result
The page should be a faithful static recreation of the Minerva design system reference, built within the existing Next.js app scaffold.
