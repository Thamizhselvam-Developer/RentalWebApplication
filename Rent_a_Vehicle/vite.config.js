import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
export default defineConfig({
  plugins: [react()],
  
  build: {
    rollupOptions: {
      
    }
  },
  define: {
    'process.env': process.env
  }  ,

});