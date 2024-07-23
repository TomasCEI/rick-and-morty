import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El base se necesita para github pages ya que el dominio posee una subcarpeta "tu-repositorio"
const isProd = process.env.NODE_ENV === 'production'

// base para github Pages:
// https://tu-usuario-github.github.io/tu-repositorio
export default defineConfig({
  plugins: [react()],
  base: isProd ? 'https://tomascei.github.io/rick-and-morty' : ""
})
