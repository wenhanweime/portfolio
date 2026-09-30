# Independent builder portfolio · V2

## Intent

Give a potential collaborator or hiring manager a concrete impression of a builder who can define, design, implement, and ship a product. The strongest evidence is the work itself, with direct routes to code, demos, and product screens.

## Design decisions

- Cool paper `#f5f7fa`, slate ink `#182636`, secondary slate `#526071`, cobalt `#275bdd`, white surfaces, and muted mint for the creator product.
- Manrope and Noto Sans SC for display and body; IBM Plex Mono for supporting labels. System fallbacks remain usable if Google Fonts is unavailable.
- Wide desktop composition, three deliberately prioritized product features, then a smaller experiment collection.
- Signature interaction: a small product workbench switches among three real screenshots and links to the respective case study. No fabricated dashboard data or animation assets.
- Existing avatar, screenshots, project URLs, and legacy routes are retained.
- Case studies put the problem, implementation choices, and inspectable artifacts before the gallery. Existing galleries remain available.
- No added revenue or adoption metrics. Removed an unverified numerical scale claim from RentKoa and a literal particle-count claim from Particle Sky.

## Scope

The work changes the portfolio presentation, not the products themselves. Public product links are retained; the presence of a screenshot does not imply an App Store release or audited business outcomes.

## Validation

- ESLint and TypeScript/Vite production build.
- Real Chrome interactions via browser-mcp: all eight homepage-to-detail-to-home flows; workbench tab switching and navigation; bilingual homepage and detail page; keyboard arrow tab navigation; legacy StarSay alias; unknown-project fallback; invalid stored language.
- Mobile at the existing 430px browser viewport; desktop layout in a same-origin 1440px iframe viewport to avoid changing the user's shared Chrome configuration.
- Confirmed no horizontal overflow on checked pages. Full-page images were inspected after scrolling to load lazy images.

## Versioning

- Source baseline: `4b30641`, tagged `baseline/pre-indie-builder-20260930`.
- Implementation branch: `feature/indie-builder-v2`, isolated worktree.
- Review target: `feature/project-covers`.
- Preview scope: `gh-pages:previews/indie-builder-v2/`.
- Production homepage remains at its prior revision; no old PRs were merged or closed.
