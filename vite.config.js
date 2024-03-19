import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePresetReact } from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePresetReact({
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    }),
  ],
})
