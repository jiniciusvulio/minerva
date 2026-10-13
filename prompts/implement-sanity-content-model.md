# Implementation prompt: Sanity content model, Studio, and server data layer

## Goal

Implement Minerva's Sanity authoring workspace and content data layer for courses, embedded modules, lessons, instructors, and categories. Keep the Sanity Studio standalone from the Next.js web app and keep all private Sanity reads on the server.

## Skills and guidance

- Read `sanity-best-practices`, including its schema, Next.js integration, Studio structure, and project structure guidance.
- Follow the installed Next.js 16 documentation for data fetching and server/client boundaries.
- Follow the repository's `AGENTS.md`: separate Studio and web workspaces, private dataset, structured content, and server-only credentials.

## Inspected code and configuration

- The web app currently lives at the repository root and uses Next.js 16, `next-sanity`, Sanity 5, and TypeScript.
- Sanity helpers are under `sanity/`; its current schema is empty.
- A Sanity Studio is currently mounted at `/studio` through `app/studio/[[...tool]]/page.tsx` and root `sanity.config.ts`.
- The worktree already contains uncommitted Sanity setup and dependency changes. Preserve the existing Clerk and home-page work; only reshape the in-progress Sanity setup as needed for this request.
- `.env.local` contains project ID and dataset values but no Sanity read token. Never copy or expose its values.

## Decisions and assumptions

- Keep the Next.js app at the repository root as the web workspace and add a distinct `studio/` workspace with its own package manifest, CLI config, Studio config, schema, and structure.
- Remove the embedded `/studio` route and its root-only Studio configuration after replacing them with the standalone workspace.
- Use `SANITY_API_READ_TOKEN` only in the server-side read client. Keep project ID, dataset, and API version client-safe configuration where needed, but do not mark the read token `NEXT_PUBLIC_`.
- Model `module` as an object embedded in a course, not as a standalone document. Use document references for instructor, category, and lesson relationships.
- Define sensible validation and typed fields for the specified Minerva course/lesson surfaces. Use Portable Text for lesson notes.
- Create focused GROQ queries and server-only data access helpers for catalog, course, lesson, instructor, and category reads; derive a lesson's course through the reverse reference.
- Configure Studio TypeGen to inspect web queries and emit generated types for the web workspace.
- Do not add sample content, learner progress, video ingestion, search, or additional features in this change.

## Expected files

- Add `studio/package.json`, `studio/sanity.config.ts`, `studio/sanity.cli.ts`, and schema/structure files under `studio/schemaTypes/` and `studio/`.
- Update the root `package.json` and lockfile only as needed to make web and Studio dependencies/workflows independent.
- Update or replace the existing `sanity/` helpers with server-only client, typed query definitions, data access, and image URL support.
- Add `.env.example` documenting the web and Studio environment variable names without credentials.
- Remove the embedded `app/studio/[[...tool]]/page.tsx` and root `sanity.config.ts` if no longer used.
- Update README instructions for running the web app and Studio independently.

## Requirements

- Studio document types: `course`, `lesson`, `instructor`, and `category`; `module` is an embedded object.
- A course has title/slug, summary, cover image, level, price, optional popular flag and student count, learning outcomes, instructor/category references, and ordered modules containing title, summary, and ordered lesson references.
- A lesson has title/slug, video URL, thumbnail, duration, free-preview flag, student count, Portable Text notes, key points, optional pro tip, and typed resources.
- An instructor has name/slug, photo, expertise, and bio. A category has title/slug and description.
- Provide a navigable Studio structure for the four document types.
- Provide a server-only Sanity client configured for private reads, with explicit API version and deliberate CDN/cache configuration.
- Provide data helpers for courses, lessons, instructors, and categories, including slug-based reads and reverse-reference course resolution for lessons.
- Avoid leaking Sanity tokens to browser bundles or serialized client props. Do not return credentials from any helper.

## Security considerations

- Mark the read client/data module as server-only and require `SANITY_API_READ_TOKEN` there.
- Never log, commit, or expose environment values. Add only variable names/placeholders to `.env.example`.
- Avoid browser-side Sanity clients and do not add write access to the web data layer.
- Keep GROQ parameters bound rather than interpolating user-controlled values into query text.

## Acceptance criteria

- Studio can start independently from the Next.js web app and presents the Minerva content types.
- Schema types encode the required relationships and structured fields, with required-field and sensible URL/numeric validation.
- Web data helpers return typed projections for catalog and slug-based content reads; lesson data can include its containing course resolved by reverse reference.
- Missing required server read credentials fail explicitly and do not fall back to a public/anonymous client.
- The web app type-checks, lints, and production-builds; the Studio type-checks/builds.
- Existing Clerk and landing-page changes remain intact.

## Checks

- Run the repository lint and TypeScript check.
- Build the root Next.js app.
- Run the standalone Studio's TypeScript check and production build.
- Do not claim live Sanity connectivity unless a configured read token and deployed project are available; local schema/build validation is sufficient otherwise.

## Manual test steps

1. Install dependencies for the root and `studio/` workspaces as documented.
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, and `SANITY_API_READ_TOKEN` in the web environment; set project ID and dataset for Studio CLI.
3. Run the web app and the standalone Studio in separate terminals.
4. In Studio, create a category and instructor, then create a course with at least one module and referenced lesson.
5. Create/edit the lesson with Portable Text notes and a resource; confirm the Studio displays all field groups and references.
6. Exercise the server read helpers against the configured private dataset and verify catalog, detail, and lesson-to-course data resolve without exposing the token in browser requests or output.
