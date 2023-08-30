import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
    }
  }

  return {
    plugins: [react()],
    base: '/freecodecamp-random-quote-machine/',
  }
});
