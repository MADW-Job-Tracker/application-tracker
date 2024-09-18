import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/application": {
        target: "http://localhost:8080/application/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/application/, ""),
      },
    },
  },
  preview: {
    port: 8080,
  },
  build: {
    outDir: 'dist',  // change to your desired output directory
    rollupOptions: {
      input: 'src/main.tsx',  // or whichever entry point you're using
    },
  },
})
