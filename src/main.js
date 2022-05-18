import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueNotification from "vue-notification";

Vue.use(Vuex)

Vue.use(VueNotification)
Vue.config.productionTip = false

import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
