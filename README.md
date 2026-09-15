# Math Catch-Up (public host)

HTTPS site for iPad. Source of truth remains the private [math-catchup](https://github.com/sarumugam7/math-catchup) repo (do not make that repo public).

## Live URL (working)

**https://sarumugam7.github.io/math-catchup-web/**

Served from the **`gh-pages`** branch (static build). No GitHub Actions workflow required for the live site.

## Add to Home Screen (iPad Safari)

1. Open https://sarumugam7.github.io/math-catchup-web/
2. Tap **Share** → **Add to Home Screen** → Add.
3. Progress stays on this iPad (Safari `localStorage`).

## Source / rebuild notes

- Vite `base` must be `/math-catchup-web/` for this host.
- Production JS is published as base64 chunks under `gh-pages` `assets/b64/` and assembled by `index.html` (MCP-safe deploy path).
- Keep `main` source complete for local builds; live site does not depend on Actions.
