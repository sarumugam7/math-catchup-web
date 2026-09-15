# Math Catch-Up (public host)

HTTPS static site for iPad practice. Source of truth: private repo [math-catchup](https://github.com/sarumugam7/math-catchup).

## Live URL

**https://sarumugam7.github.io/math-catchup-web/**

### One-time Pages setup

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. If the workflow file is only at repo root as `github-pages-deploy.yml`, copy it to `.github/workflows/deploy.yml` and commit.
3. Actions tab → run **Deploy to GitHub Pages** (or push to `main`).

### iPad (Safari)

1. Open the live URL
2. Share → **Add to Home Screen**
3. Progress stays in Safari `localStorage` on that iPad
