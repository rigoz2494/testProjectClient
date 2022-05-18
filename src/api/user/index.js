import axios from "axios"

const HOST_API = process.env.VUE_APP_BASE_URL

export default {
  registration(payload = {}) {
    return axios.post(`registration`, payload)
  },

  login(payload = {}) {
    return axios.post(`login`, payload)
  },

  logout() {
    return axios.post(`logout`)
  },

  fetchUser() {
    return axios.get('user')
  }
}
