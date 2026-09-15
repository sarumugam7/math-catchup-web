# Math Catch-Up (public host)

HTTPS site for iPad. Source of truth: private [math-catchup](https://github.com/sarumugam7/math-catchup).

## Live URL

**https://sarumugam7.github.io/math-catchup-web/**

## One-time setup (required — ~2 minutes)

Automation cannot create `.github/workflows/` files (missing `workflows` permission).

1. Open [`github-pages-deploy.yml`](./github-pages-deploy.yml) and copy its contents.
2. **Add file → Create new file** at path `.github/workflows/deploy.yml`, paste, commit to `main`.
3. **Settings → Pages → Source: GitHub Actions**.
4. **Actions** → run **Deploy to GitHub Pages**.

Also ensure all `src/generators/*.ts` and `src/index.css` are present before the first successful build (finish any remaining uploads if the Actions build fails on missing modules).

## iPad (Safari)

1. Open the live URL after deploy succeeds.
2. Share → **Add to Home Screen**.
3. Progress stays in Safari `localStorage` on that iPad.
