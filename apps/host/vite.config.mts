import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        header: 'http://localhost:4201/assets/remoteEntry.js',
        cards: 'http://localhost:4202/assets/remoteEntry.js',
        footer: 'http://localhost:4203/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'zustand']
    })
  ],
  server: {
    port: 4200,
    host: 'localhost'
  }
});