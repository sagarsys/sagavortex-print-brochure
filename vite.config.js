import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static single-page site. base: './' keeps asset paths relative so it works
// on any host (Cloudflare Pages, Netlify, a subfolder, etc.).
export default defineConfig({
  plugins: [react()],
  base: './',
})
