import Vue from 'vue'
import Vuex from 'vuex'

import state from './main/state'
import mutations from './main/mutations'
import getters from './main/getter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: state(),
  getters: getters,
  mutations: mutations
})
