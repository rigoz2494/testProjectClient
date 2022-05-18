export default async function auth({next, store, nextMiddleware}) {
  const token = store.getters.getToken

  if (!token) {
    return next({name: 'login'})
  }

  axios.defaults.headers.common.Authorization = token

  const user = await store.dispatch('fetchUser')

  return nextMiddleware()
}
