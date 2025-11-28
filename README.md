# A1 Agent – Anti-Productivity Landing Page

A1 Agent is a tongue-in-cheek marketing site for a fictional AI company that proudly sprints away from real artificial intelligence. The single-page-feel app is built with modern React and packed with ridiculous copy, animated timelines, and fake HR policies to keep the joke flowing from hero to footer.

## Features

- Responsive navigation + layout with hash-based routing so every fake section has a shareable URL
- “Leadership” grid, cursed roadmap, and careers board that lean into the satire with Lucide icons and Unsplash imagery
- Timeline, value cards, and CTA surfaces styled with utility-first classes for quick iteration
- Stub pages for pricing, privacy, terms, products, login, and forgotten credentials to round out the parody startup feel

## Tech Stack

- React 19 + React Router DOM 7
- Vite 6 for fast dev/build + HashRouter-friendly GitHub Pages deploys
- Lucide React icon set for lightweight SVG icons
- Utility-first styling (Tailwind-compatible classnames) authored directly in JSX

## Run Locally

**Prerequisites:** Node.js + [pnpm](https://pnpm.io/) (recommended)

1. Install dependencies
   ```sh
   pnpm install
   ```
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key.
3. Start the dev server
   ```sh
   pnpm dev
   ```

## Formatting

The project uses [oxfmt](https://github.com/oxc-project/oxc/tree/main/crates/oxfmt) for consistent formatting.

```sh
pnpm format
pnpm format --check
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with `pnpm build` and publishes the `dist` folder to GitHub Pages. Set Pages to “GitHub Actions” and keep `base` in `vite.config.ts` aligned with your repo slug.
