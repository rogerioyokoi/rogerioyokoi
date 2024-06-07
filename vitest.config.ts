/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    setupFiles: ['vitest-axe.setup.ts'],
    environment: 'jsdom',
  },
});
