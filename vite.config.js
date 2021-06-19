import { defineConfig } from 'vite'
import eslint from '@rollup/plugin-eslint'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { ...eslint({ include: 'src/**/*.+(js|jsx)' }), enforce: 'pre' },
    reactRefresh()
  ],
  /** Incluye automáticamente el import de react en los archivos. */
  esbuild: {
    jsxInject: "import React from 'react'"
  }
})
