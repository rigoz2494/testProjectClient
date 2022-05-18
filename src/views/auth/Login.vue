<template>
  <v-container fluid>
    <div
      disabled
      class="text-h3">
      Registration
    </div>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row>
        <v-col
          cols="12"
          md="9"
        >
          <v-text-field
            v-if="isLoginByUsername"
            v-model="form.username"
            label="Username"
            required
          >
          </v-text-field>
          <v-text-field
            v-else
            v-model="form.email"
            label="Email"
            required
          >
          </v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3">
          <v-switch
            v-model="isLoginByUsername"
            :label="`Login by  ${isLoginByUsername ? 'Username' : 'Email'}`"
          >
          </v-switch>
        </v-col>

      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.password"
            label="Password"
            :rules="[rules.required, rules.min]"
            :type="showPass ? 'text' : 'password'"
            required
          >
          </v-text-field>

        </v-col>

        <v-col
          cols="12"
          md="6"
        >

          <v-text-field
            v-model="form.password_confirm"
            label="Password confirm"
            :rules="[rules.required, rules.passMatch]"
            :type="showPass ? 'text' : 'password'"
            required
          >
          </v-text-field>

        </v-col>
      </v-row>

      <v-btn class="primary" @click.native="sendLoginForm">Login</v-btn>
    </v-form>

  </v-container>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      valid: true,
      isLoginByUsername: true,
      showPass: true,

      form: {
        username: '',
        email: '',
        password: '',
      },

      rules: {
        required: value => !!value || 'Required',
        min: value => value.length > 3 || 'Min 3 chars',
        passMatch: value => value === this.form.password || 'Password you entered don\'t match',
        validAge: value => value > 17 && value < 51 || 'Age must be greater 17 and lower 50'
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),

    sendLoginForm() {
      const payload = {}

      if (this.isLoginByUsername) {
        payload.username = this.form.username
      } else {
        payload.email = this.form.email
      }
      payload.password = this.form.password

      const {data} = this.login(payload)
    }
  }
}
</script>

<style scoped>

</style>
