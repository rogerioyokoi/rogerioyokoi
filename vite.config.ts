import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },

  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer(),
    sentryVitePlugin({
      org: 'rogerio-yokoi',
      project: 'portfolio',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },

  build: {
    sourcemap: true,
  },
});
