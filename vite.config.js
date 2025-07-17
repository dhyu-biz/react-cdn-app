import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'ReactCDNApp',
      fileName: 'react-cdn-app',
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'react-cdn-app.css';
          }
          return assetInfo.name;
        }
      }
    },
    cssCodeSplit: false,
    assetsInlineLimit: 100000000
  }
})
