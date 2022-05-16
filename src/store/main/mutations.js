export default {
  SET_USER (state, user) {
    state.user = user
  },

  SET_TOKEN (state, token) {
    if (token) {
      state.token = token
      localStorage.setItem('token', token)
    } else {
      state.token = null
      localStorage.removeItem('token')
    }
  },

  LOGOUT_USER (state) {
    state.user = null
    state.token = null
  }
}
