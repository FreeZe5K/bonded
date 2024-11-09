import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $src: '/src',
      $lib: '/src/lib',
      $components: '/src/lib/components',
      // $data: '/src/lib/data',
      // $modals: '/src/lib/modals',
      // $server: '/src/lib/server',
      // $stores: '/src/lib/stores',
      // $types: '/src/lib/types',
      $ui: '/src/lib/ui',
      $hooks: '/src/lib/hooks',
      // $utils: '/src/lib/utils',
    },
  },
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
