import { resolve } from 'path'

export default {
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        benefits: resolve(__dirname, 'benefits/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        health: resolve(__dirname, 'health/index.html'),
        workout: resolve(__dirname, 'workout/index.html')
      }
    }
  }
}