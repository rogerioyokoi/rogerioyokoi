import { defineConfig } from 'vite';

/** @type {import('vitest').UserConfig} */
export default defineConfig({
  test: {
    setupFiles: ['vitest-axe.setup.ts'],
    environment: 'jsdom',
  },
});
