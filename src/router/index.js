import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import AUTH_ROUTES from "@/router/auth-routes";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login'),
    meta: {
      title: 'Акторизация',
    }
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: 'Регистрация',
      requiredAuth: true
    },
    component: () => import('../views/auth/Register')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
    meta: {
      title: 'Организация',
    }
  },
  ...AUTH_ROUTES
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
