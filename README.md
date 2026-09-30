# wenhan · Independent builder

Bilingual portfolio built with React, TypeScript, and Vite. Three selected projects show developer tooling (Herduck), AI memory and interaction (StarSay), and creator collaboration (RentKoa). Five smaller projects remain accessible below them.

- Current site: https://wenhanweime.github.io/portfolio/
- V2 preview: https://wenhanweime.github.io/portfolio/previews/indie-builder-v2/
- V2 branch: `feature/indie-builder-v2`
- Previous source version: `baseline/pre-indie-builder-20260930` (`4b30641`)

## Local development

Use Node 22 or newer.

```sh
npm ci
npm run dev
npm run lint
npm run build
```

Vite serves the app under `/portfolio/`. Hash routes work on GitHub Pages without rewrite rules. The legacy `#/project/staroracle` route still resolves to StarSay.

## Edit content

- `src/data/projects.ts`: project metadata, public links, galleries, and technical details.
- `src/data/showcase.ts`: selected projects and bilingual case-study summaries.
- `src/i18n/{zh,en}.ts`: page copy and labels.
- `src/index.css`: design tokens, layout, responsive behavior, focus and reduced-motion styles.
- `public/`: existing product images and avatar.

Keep claims grounded in available product materials. Do not introduce user counts, revenue, performance, or launch claims without evidence.

## Version and publication strategy

V2 branches from the last published source, `4b30641`, on `feature/project-covers`. Its review targets that branch so the redesign diff is readable. Existing redesign PRs and `main` are not part of this change.

The preview is deployed **only** to `gh-pages:previews/indie-builder-v2/`. The existing root production site is preserved. Source and deployment have separate Git histories; a preview contains `version.json` with its exact source revision.

Build for the isolated preview:

```sh
npm run build -- --base=/portfolio/previews/indie-builder-v2/
```

To update it, copy this build into that directory in a clean `gh-pages` worktree, commit, and push normally. Never replace the whole `gh-pages` root with the preview build. To retire the preview, remove only that preview directory in a new deployment commit. To revert source changes, use a new branch from the preserved baseline or revert the V2 commit; no history rewrite is needed.

A production promotion should build with the default `/portfolio/` base and preserve any preview directories. The V2 preview is a separate reviewable release, not a replacement of production.

See [the V2 design and validation notes](docs/indie-builder-v2.md).
