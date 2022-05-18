<template>
  <div>
    <v-toolbar
      color="primary"
      dark
    >
      <router-link v-if="isAuth" :to="{name: 'organisation'}">
        <v-btn text>Organisations</v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn text v-if="isAuth" @click.native="logout">
          Logout
      </v-btn>

      <template v-else>
        <router-link :to="{name: 'register'}">
          <v-btn text>
            Register
          </v-btn>
        </router-link>

        <router-link :to="{name: 'login'}">
          <v-btn text>
            Login
          </v-btn>
        </router-link>
      </template>

    </v-toolbar>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Header",

  computed: {
    ...mapGetters([
      'isAuth'
    ])
  },

  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style scoped>

</style>
