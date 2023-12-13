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
                workout: resolve(__dirname, 'workout/index.html'),
                login: resolve(__dirname, 'login/index.html'),
                register: resolve(__dirname, 'register/index.html'),
                quiz: resolve(__dirname, 'quiz/index.html'),
                health_quiz: resolve(__dirname, 'quiz/health-quiz/index.html'),
                leaderboard: resolve(__dirname, 'quiz/leaderBoard/index.html'),
                summary: resolve(__dirname, 'quiz/summary/index.html'),
                tracker: resolve(__dirname, 'tracker/index.html'),
                details: resolve(__dirname, 'tracker/details/index.html'),
                error: resolve(__dirname, '404.html')
            }
        }
    }
}