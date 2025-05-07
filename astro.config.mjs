// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: { 
    host: '192.168.0.11', 
    port: 4321 },
  vite: {
    plugins: [tailwindcss()]
  }
});