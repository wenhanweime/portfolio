# RentKoa screenshot fixtures

This harness imports the original product components from an existing checkout. It does not copy or modify the product source. All fetches are intercepted locally; no backend calls, invitations, or orders are made. The banner identifies example data. The host adjusts only the modal's outer height and position to fit the capture area.

From the portfolio root:

```sh
RENTKOA_SOURCE=/absolute/path/to/kolbot ./node_modules/.bin/vite --config docs/rentkoa/capture/vite.config.mjs
```

Open `http://127.0.0.1:5175/?screen=settings`, `?screen=inbox`, `?screen=history`, or `?screen=inspiration` through browser-mcp. For inspiration, click “生成内容方案” to show the illustrative payload. Capture at 1120 × 840 using a same-origin iframe when the shared browser viewport differs; do not change shared profile settings.

The campaign draft fixture follows the three template shapes in `backend/lib/campaign.ts`; the creator names, responses, and content-plan copy are illustrative. The other screenshots (creation, brief, candidate selection, comparison, direct collaboration) were captured from the live product as a guest. Only campaign previews were generated; no real invitations were sent.

After exporting the Markdown, run `python3 scripts/package-rentkoa-guide.py` to rebuild the offline document and screenshot bundle.
