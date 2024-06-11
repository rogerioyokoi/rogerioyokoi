import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// eslint-disable-next-line import/no-unresolved
import postcssConfig from './postcss.config';

export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
  plugins: [react()],
  css: {
    postcss: postcssConfig,
  },
});
