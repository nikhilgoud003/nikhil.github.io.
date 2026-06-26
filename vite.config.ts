import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages: set base to '/nikhil.github.io./'
// For Vercel/local: use '/'
const base = process.env.GITHUB_PAGES === 'true' ? '/nikhil.github.io./' : '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
