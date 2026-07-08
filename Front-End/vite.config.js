import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ngrok } from 'vite-plugin-ngrok';

export default defineConfig({
  plugins: [
    react(),
    ngrok({
      authtoken: "1qzLkasiuF8jkItT3z7ZgRrNuYU_6okWXAuShVJ5watmubw3H",
    }),
  ],

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui': ['react-bootstrap', '@restart/ui'],
          'animations': ['framer-motion'],
          'supabase': ['@supabase/supabase-js'],
          'axios': ['axios'],
        },
        // ✅ IMPORTANTE: No separar react-icons en chunks
        // Deja que Vite los optimice automáticamente
      },
    },
    
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
  },

  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'localhost',
      '.ngrok-free.app',
      '.ngrok.io',
    ],
  },
});