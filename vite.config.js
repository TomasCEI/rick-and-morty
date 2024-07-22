import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// base para github Pages:
// https://tu-usuario-github.github.io/tu-repositorio
export default defineConfig({
  plugins: [react()],
  base: 'https://tomascei.github.io/rick-and-morty'
})
