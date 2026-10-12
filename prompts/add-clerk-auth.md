# Add Clerk Authentication

## Goal

Set up Clerk authentication in the existing Minerva Next.js App Router project using the Clerk CLI and the specified Clerk application `app_3JwG511AneeBP2mEc2e55jKyNlo`. Keep course browsing public, add visible sign-in and sign-up actions for signed-out visitors, and show a Clerk user control for signed-in users.

## Skills and instructions

- Read `.agents/skills/clerk-cli/SKILL.md` and `.agents/skills/clerk-setup/SKILL.md`.
- Follow `AGENTS.md`, including keeping the change focused and running the required checks.
- Follow the requested CLI sequence: CLI installed globally and authenticated; next run `clerk init --app app_3JwG511AneeBP2mEc2e55jKyNlo` from the project root.
- Read the installed Next.js 16 documentation for the relevant proxy and layout conventions before any manual code edits.

## Inspected code and decisions

- `package.json` identifies Next.js `16.3.6`, React `19.2.8`, and npm (`package-lock.json`). It has no Clerk SDK dependency.
- `app/layout.tsx` is the root App Router layout and currently places children directly inside `<body>`.
- `app/page.tsx` contains the current catalog landing page and a static `TS` avatar in its header. Reuse that header location for auth controls without redesigning the page.
- `next.config.ts` is minimal. A root proxy or middleware and Clerk provider/control wiring were not found; search hits were only in skill examples.
- The CLI is installed and authenticated. Do not inspect, display, or commit environment files.
- Use the provided app ID explicitly; do not create or select another application.
- Keep `CLERK_SECRET_KEY` server-only. The CLI-managed environment file must remain local and untracked.

## Expected files

Let `clerk init` make its framework-specific changes. Expected touched files may include `package.json`, `package-lock.json`, `app/layout.tsx`, a root `proxy.ts` (or middleware file if the CLI uses that convention), and a local environment file. Add auth controls in the existing landing-page header, likely in `app/page.tsx`. Do not make unrelated UI, route, or authentication-policy changes.

## Requirements

- Run `clerk init --app app_3JwG511AneeBP2mEc2e55jKyNlo` without framework or package-manager overrides.
- Ensure `ClerkProvider` is inside `<body>` for the current SDK generation.
- Use `SignInButton`, `SignUpButton`, `Show`, and `UserButton` from `@clerk/nextjs`, unless the CLI setup already provides equivalent controls; do not duplicate controls.
- Preserve public access to catalog browsing. Do not add protected-route policies unless the CLI requires neutral middleware setup.
- For Next.js 16, verify the generated `proxy.ts` convention and ensure the Clerk auto-proxy matcher `'/__clerk/:path*'` is present once after `'/(api|trpc)(.*)'` when that matcher is applicable. Do not use deprecated `middleware.ts` if the current Next.js docs specify `proxy.ts`.
- Do not read or print existing environment variable files, expose secret keys to client code, or commit secret values.
- Preserve the existing page design and use the current header avatar location naturally.

## Acceptance criteria

- Clerk CLI init links to the specified application and completes without unresolved setup steps, or any blocker is reported precisely.
- Signed-out users see sign-in and sign-up actions in the existing header; signed-in users see a real `UserButton` instead of the static initials badge.
- The root layout has a correctly placed provider and the proxy matcher is correct for this Next.js version.
- No secret key is referenced by browser code or included in tracked changes.
- Type check, lint, production build, and `clerk doctor` succeed, subject to the available credentials/configuration.

## Checks

1. Run `clerk doctor` after CLI initialization.
2. Run `npx tsc --noEmit`.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Start the app with `npm run dev` and inspect the landing page.

## Manual test steps

1. Open the local app and verify catalog content remains public.
2. Verify signed-out header shows both sign-in and sign-up actions.
3. Click sign-up and complete Clerk's development sign-up flow; return to the app and verify the Clerk profile control appears.
4. Open the profile control and verify the signed-in account is recognizable.
5. Sign out and verify the signed-out controls return.