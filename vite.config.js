import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:process.env.NODE_ENV==='production'?'/rcReact/':'/',
  /*   base:'./',
   */
  base: '/mycode/',
  plugins: [react()],
  // base:process.env.NODE_ENV ==='production'?'/RightCode/':'/', 
})
