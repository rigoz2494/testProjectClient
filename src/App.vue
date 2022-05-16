<template>
  <div id="app">
    <div v-if="isAuth">LOGGED</div>
    <div v-else>NOT LOGGED</div>

    <router-view :key="routerKey"/>
  </div>
</template>

<script>
  import Vue from 'vue'

  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {

      }
    },

    computed: {
      ...mapGetters([
        'isAuth'
      ]),

      routerKey() {
        return this.$router.path
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
