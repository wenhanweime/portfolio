# wenhan · Personal portfolio

Bilingual portfolio built with React, TypeScript, and Vite. A personal introduction sits alongside a compact collection of eight projects. Project notes preserve the technical case studies and galleries.

- Current site: https://wenhanweime.github.io/portfolio/
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

The original site and V2 preview remain available. Original source is tagged `baseline/pre-indie-builder-20260930`; original deployment is tagged `baseline/deploy-pre-indie-builder-20260930`.

Build this preview with:

```sh
npm run build -- --base=/portfolio/previews/personal-portfolio-v3/
```

Copy the build only into `gh-pages:previews/personal-portfolio-v3/`, add a `version.json` identifying the source commit, then commit and push. Do not replace the production root or other previews. Roll back with a new commit; no force push is needed.

See [V3 notes](docs/personal-portfolio-v3.md) and [the previous V2 notes](docs/indie-builder-v2.md).
