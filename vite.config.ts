import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [sveltekit()],

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  server: {
    port: 3000,
    strictPort: false,
  },
  preview: {
    port: 4000,
    strictPort: false,
  },
})
