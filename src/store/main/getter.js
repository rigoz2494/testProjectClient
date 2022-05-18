export default {
  getToken: (state) => state.token,
  getUser: (state) => state.user,
  isAuth: (state) => !!(state.token && state.user)
}
