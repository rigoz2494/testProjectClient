export default {
  getToken: (state) => state.token,
  isAuth: (state) => !!(state.token && state.user),
  getUser: (state) => state.user
}
