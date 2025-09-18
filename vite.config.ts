import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
