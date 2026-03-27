# Thallium Landing

Minimal technical company landing page for Thallium, built with Astro 5 and Tailwind 4.

## Stack

- `astro`
- `tailwindcss`
- `@astrojs/sitemap`
- `@astrolib/seo`
- Cloudflare Workers static assets via `wrangler.jsonc`

## Commands

| Command        | Action                                 |
| -------------- | -------------------------------------- |
| `pnpm install` | Install dependencies                   |
| `pnpm dev`     | Start the local Astro dev server       |
| `pnpm build`   | Build the production site into `dist/` |
| `pnpm preview` | Preview the built site locally         |

## Deployment

GitHub Actions now handles CI and Cloudflare deployments.

### Workflows

- `.github/workflows/ci.yml` builds the site on every pull request and on pushes to `main`
- `.github/workflows/deploy.yml` deploys:
  - preview builds on pull requests to the `preview` Cloudflare environment
  - production builds on pushes to `main` or manual dispatches to the `production` environment

### Required GitHub secrets

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### Recommended GitHub environment setup

- `preview`: no approval required
- `production`: required reviewers enabled before deploy

### Wrangler environments

- default config deploys the production site to `thallium.app`
- `preview` deploys a separate `thallium-landing-preview` worker on `workers.dev`

## Notes

- Production deploys use the `wrangler.jsonc` config in the repo root.
- The current workflows assume `pnpm-lock.yaml` remains the source of truth for installs.
