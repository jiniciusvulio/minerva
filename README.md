# Minerva

Minerva is a learning platform with a Next.js web app and an independently deployed Sanity Studio.

## Workspaces

- Web app: repository root
- Sanity Studio: `studio/`

Install dependencies in each workspace:

```sh
npm install
npm --prefix studio install
```

Copy `.env.example` to `.env.local` for the web app and copy its Studio variables into `studio/.env.local`. Set the Sanity project ID and dataset for both workspaces and keep `SANITY_API_READ_TOKEN` server-only. The Studio CLI reads `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`; the web app reads `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.

Run the web app and Studio separately:

```sh
npm run dev
npm run studio:dev
```

## Sanity content

The Studio authors courses, lessons, instructors, and categories. Modules and learning outcomes are embedded in courses; lesson resources and notes use structured Sanity fields and Portable Text.

Web reads are in `sanity/lib/data.ts` and use a server-only client configured with the private published-dataset read token. GROQ parameters are passed separately from query strings. Current read helpers include:

- `getCourses()` and `getCourseBySlug(slug)`
- `getLessonBySlug(slug)` (including its course via reverse reference)
- `getInstructorBySlug(slug)`
- `getCategories()` and `getCategoryBySlug(slug)`

The Studio can generate frontend query types with `npm --prefix studio run typegen`.

## Validation

```sh
npm run typecheck
npm run lint
npm run build
npm --prefix studio run typecheck
npm --prefix studio run build
```
