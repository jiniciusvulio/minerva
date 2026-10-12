# Fix Duplicate React Key in Home Page

## Goal
Remove the duplicate React key warning reported while rendering the decorative bar strip on the Minerva home page.

## Skills and guidance read
- Repository `AGENTS.md` workflow and validation requirements.
- Clerk skill router; Clerk SDK is v7.9.14. No Clerk code change is planned.

## Code inspected
- `app/page.tsx`: the bar strip maps repeated numeric heights and currently uses `height + index` as its React key.
- `proxy.ts` and `app/layout.tsx`: Clerk middleware/provider wiring is present.
- `.env.local`: both required Clerk variable names exist and have non-empty values; secret values were not displayed.
- User-provided dev log: Clerk errors occur before `.env.local` reload; subsequent root requests return 200. Treat this as startup/environment timing, not an active auth code defect.

## Decision and assumptions
Use the array index as the key for the decorative bars. Their order is fixed and they have no independent state, so a unique positional key is appropriate. Leave Clerk wiring and environment files unchanged.

## Expected files
- `app/page.tsx`

## Requirements and security
- Ensure every bar key is unique and deterministic for the rendered list.
- Do not print or modify Clerk secrets.
- Do not change visual output or unrelated application behavior.

## Acceptance criteria
- The duplicate-key warning no longer occurs on `/`.
- `npm run lint` passes.
- The production build passes.

## Checks and manual test
1. Run `npm run lint`.
2. Run `npm run build`.
3. Start `npm run dev -- --hostname 0.0.0.0` and load `http://localhost:3000/`; confirm the home page responds successfully without a duplicate-key warning.
