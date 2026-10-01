# Personal portfolio · V3

V2 looked like a product landing page. This revision centers the person and lets visitors browse the work at their own pace.

- Name and avatar are the main identity; short first-person introduction, current projects, school background, and interests replace the headline pitch.
- A quiet left profile and a compact two-column collection on desktop; profile followed by projects on mobile.
- Neutral off-white, charcoal text, muted green links. No primary conversion CTA, product switcher, alternating feature panels, or capability manifesto.
- Preserve the original Herduck and StarSay cover images from project metadata. Use `wenhan` in the personal introduction; no Chinese personal name.
- All eight projects remain visible. Each has project notes and, when available, a code or product link.
- Existing case studies, galleries, bilingual support, and legacy routes stay available.

Source baseline: `b198da7` (V2). Branch: `feature/personal-portfolio-v3`. Preview scope: `previews/personal-portfolio-v3/`. Both previous versions are preserved.

Validation: ESLint and production build; real Chrome/browser-mcp checks for homepage-to-detail navigation, returning home, bilingual layout, mobile overflow, and desktop iframe layout without changing shared browser settings.
