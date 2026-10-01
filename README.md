# wenhan · Personal portfolio

Bilingual portfolio built with React, TypeScript, and Vite. A personal introduction sits alongside a compact collection of eight projects. Project notes preserve the technical case studies and galleries.

- Production site: https://wenhanweime.github.io/portfolio/
- Current production revision: https://wenhanweime.github.io/portfolio/version.json
- Initial V3 release: `release/personal-portfolio-v3-20261001` (approved source `69c482b`)
- V3 preview: https://wenhanweime.github.io/portfolio/previews/personal-portfolio-v3/
- Previous V2 preview: https://wenhanweime.github.io/portfolio/previews/indie-builder-v2/
- V3 branch: `feature/personal-portfolio-v3`
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

V3 branches from V2 (`b198da7`) on `feature/personal-portfolio-v3`. The user found V2 too much like a product landing page. V3 removes the pitch and product switcher, makes Wenhan the main subject, and presents projects as a compact collection. Its PR targets `feature/indie-builder-v2` for a focused comparison.

V3 was promoted to production on 2026-10-01. Both V2 and V3 previews remain available. The pre-promotion deployment is tagged `backup/production-before-v3-20261001`; original source is also tagged `baseline/pre-indie-builder-20260930`. See [the production release record](docs/releases/2026-10-01.md).

Build this preview with:

```sh
npm run build -- --base=/portfolio/previews/personal-portfolio-v3/
```

For preview updates, copy the build only into `gh-pages:previews/personal-portfolio-v3/`, add a `version.json` identifying the source commit, then commit and push.

For an approved production release, build with `npm run build -- --base=/portfolio/` and copy the result into the `gh-pages` root while preserving `previews/` and previous hashed assets. Record the source commit in root `version.json`, tag the previous deployment, and push a new deployment commit. Roll back with a revert commit; no force push is needed.

See [V3 notes](docs/personal-portfolio-v3.md) and [the previous V2 notes](docs/indie-builder-v2.md).
