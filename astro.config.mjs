import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [tailwind(), compress(), react(), vue()],
});
