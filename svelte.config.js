import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      $src: './src',
      '$src/*': './src/*',
      $lib: './src/lib',
      '$lib/*': './src/lib/*',
      $components: './src/lib/components',
      '$components/*': './src/lib/components/*',
      // $data: './src/lib/data',
      // '$data/*': './src/lib/data/*',
      // $modals: './src/lib/modals',
      // '$modals/*': './src/lib/modals/*',
      // $stores: './src/lib/stores',
      // '$stores/*': './src/lib/stores/*',
      // $types: './src/lib/types',
      // '$types/*': './src/lib/types/*',
      $ui: './src/lib/ui',
      '$ui/*': './src/lib/ui/*',
      $hooks: './src/lib/hooks',
      '$hooks/*': './src/lib/hooks/*',
      $utils: './src/lib/utils',
      '$utils/*': './src/lib/utils/*',
    },
  },
}

export default config
