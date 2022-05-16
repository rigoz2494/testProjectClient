import Vue from 'vue'
import VueRouter from 'vue-router'
import authMiddleware from './middleware/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    meta: {
      title: 'Акторизация'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {
      title: 'Организация',
      middleware: [authMiddleware]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
