export default () => ({
  user: null,
  token: localStorage.getItem('token') || null,
})
