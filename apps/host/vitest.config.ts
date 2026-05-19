import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: [
      {
        find: 'header/Module',
        replacement: path.resolve(__dirname, 'src/mocks/header.app.tsx'),
      },
      {
        find: 'cards/Module',
        replacement: path.resolve(__dirname, 'src/mocks/cards.app.tsx'),
      },
      {
        find: 'footer/Module',
        replacement: path.resolve(__dirname, 'src/mocks/footer.app.tsx'),
      },
    ],
  },
});