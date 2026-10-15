// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.herraga.com',
  output: 'static',
  // Single-page site: inline all CSS into the HTML so no stylesheet blocks the first paint.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
