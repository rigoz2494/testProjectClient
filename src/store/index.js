import Vue from 'vue'
import Vuex from 'vuex'

import state from './main/state'
import mutations from './main/mutations'
import getters from './main/getter'
import UserApi from '@/api/user'
import router from "@/router";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: state(),
  getters: getters,
  mutations: mutations,
  actions: {
    async registration({commit}, payload) {
      try {
        await UserApi.registration(payload)

        this.$notify({
          group: 'notify',
          type: 'success',
          text: 'User created success!'
        })
      } catch (e) {
        const errorMessage = e.response.data.message || 'Попытка регистрации неудачна'

        Vue.notify({
          group: 'notify',
          type: 'error',
          text: errorMessage
        })
      }
    },

    async login({commit}, payload) {
      try {
        const {data} = await UserApi.login(payload)
        const token = data.data.token

        commit('SET_TOKEN', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await UserApi.fetchUser()

        commit('SET_USER', response.data.data)

        router.push({name: 'organisation'})
      } catch (e) {
        const errorMessage = e.response.data.message || 'Попытка логина неудачна'

        Vue.notify({
          group: 'notify',
          type: 'error',
          text: errorMessage
        })
      }
    },

    async logout({commit}) {
      try {
        await UserApi.logout();

        commit('SET_TOKEN', null)
        commit('SET_USER', null)
        axios.defaults.headers.common['Authorization'] = null;

        await router.push({name: 'home'})
      } catch (e) {
        const errorMessage = e.response.data.message || 'Попытка логина неудачна'

        Vue.notify({
          group: 'notify',
          type: 'error',
          text: errorMessage
        })
      }
    }
  }
})
