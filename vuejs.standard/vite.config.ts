import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    visualizer({ gzipSize: true, brotliSize: true }),
    Pages(),
    Layouts({
      defaultLayout: 'default',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
