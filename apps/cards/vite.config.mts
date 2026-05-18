import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cards',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/app.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 4202,
    host: 'localhost'
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});