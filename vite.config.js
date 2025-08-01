import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' && process.env.DEPLOY_TARGET === 'GH_PAGES'
    ? '/Portfolio-Website/'
    : '/',
  plugins: [react()],
})
