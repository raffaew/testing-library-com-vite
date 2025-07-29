import { defineConfig } from 'vitest/config' 
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',            
    setupFiles: './src/setup.ts', 
    globals: true,                     
  },
  base: '/testing-library-com-vite/',
})
