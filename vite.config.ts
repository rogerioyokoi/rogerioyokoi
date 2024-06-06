import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
  plugins: [react()],
});
