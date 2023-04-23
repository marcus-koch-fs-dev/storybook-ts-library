/* eslint-disable import/no-extraneous-dependencies */

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      } /*  '@': './src',
      '@@': path.resolve(__dirname, './src'), */,
    ],
  },
  /* esbuild: {
    jsxInject: "import React from 'react'",
  }, */
})
