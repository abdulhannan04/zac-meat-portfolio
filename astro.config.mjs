import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.ts';

export default defineConfig({
  site: siteConfig.url,
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
