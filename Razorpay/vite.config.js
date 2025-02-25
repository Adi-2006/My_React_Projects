import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173, 
    allowedHosts: ['980b-2401-4900-1681-d296-3d45-8cca-8b29-c27b.ngrok-free.app']
  }
  },
);
