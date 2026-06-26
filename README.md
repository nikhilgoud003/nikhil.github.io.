# Nikhil Yeminedi — Portfolio

Modern React portfolio built with Vite, Tailwind CSS, and Framer Motion.

## Live Site

**https://nikhilgoud003.github.io/nikhil.github.io./**

> After pushing, enable **Settings → Pages → Build and deployment → Source: GitHub Actions** on the repo.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build:gh-pages   # GitHub Pages (correct base path)
npm run preview
```

## Deploy

Pushes to `main` automatically build and deploy via GitHub Actions (`.github/workflows/deploy.yml`).

Manual deploy alternative:

```bash
npm run build:gh-pages
npx gh-pages -d dist
```

## Project Structure

- `src/data/portfolio.ts` — all content (edit here to update copy)
- `src/components/` — section components
- `public/assets/profile.png` — profile photo
