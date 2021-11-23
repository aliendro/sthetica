import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react(), svgr(), tsconfigPaths()],
});
