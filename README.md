# Nikhil Yeminedi — Portfolio

Modern React portfolio built with Vite, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Update `base` in `vite.config.ts` to your repo name (e.g. `'/nikhil.github.io./'`)
2. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run `npm run deploy`

## Deploy to Vercel

```bash
npx vercel
```

## Project Structure

- `src/data/portfolio.ts` — all content (edit here to update copy)
- `src/components/` — section components
- `public/assets/profile.png` — profile photo
