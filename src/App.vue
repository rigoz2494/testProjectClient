<template>
  <div id="app">
    <v-app>
      <main-header></main-header>

      <v-container fluid>
        <router-view :key="routerKey"/>
      </v-container>
    </v-app>

    <notifications group="notify"/>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import axios from "axios";

const MainHeader = () => import('./components/MainHeader')

export default {
  components: {
    MainHeader
  },
  data() {
    return {}
  },

  computed: {
    ...mapGetters([
      'isAuth'
    ]),

    routerKey() {
      return this.$router.path
    }
  },

  beforeMount() {
    const token = window.localStorage.getItem('token')

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
