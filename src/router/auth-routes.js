import authMiddleware from './middleware/auth'

const AUTH_ROUTES = [
  {
    path: '/organisation',
    name: 'organisation',
    component: () => import('../views/Organisation'),
    meta: {
      title: 'Организация',
      middleware: [
        authMiddleware
      ]
    }
  }
]

export default AUTH_ROUTES
