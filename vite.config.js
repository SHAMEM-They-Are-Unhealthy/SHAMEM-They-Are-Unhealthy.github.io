import { resolve } from 'path'

export default {
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        benefits: resolve(__dirname, 'benefits/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        diet: resolve(__dirname, 'diet/index.html'),
        health: resolve(__dirname, 'health/index.html'),
        results: resolve(__dirname, 'health/results/index.html'),
        workout: resolve(__dirname, 'workout/index.html')
      }
    }
  }
}