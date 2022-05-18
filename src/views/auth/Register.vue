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
          md="6"
        >
          <v-text-field
            v-model="form.username"
            label="Username"
            required
          >
          </v-text-field>

        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.email"
            label="Email"
            required
          >
          </v-text-field>

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
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPass = !showPass"
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
            :type="showPassCon ? 'text' : 'password'"
            :append-icon="showPassCon ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassCon = !showPassCon"
            required
          >
          </v-text-field>

        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="6">
          <v-text-field
            v-model="form.first_name"
            label="First name"
            :rules="[rules.required]"
            required
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6">
          <v-text-field
            v-model="form.last_name"
            label="Last name"
            :rules="[rules.required]"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="6">
          <v-text-field
            v-model="form.middle_name"
            label="Middle name"
            required
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6">
          <v-text-field
            v-model="form.age"
            label="Age"
            :rules="[rules.required, rules.validAge]"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-btn class="primary" @click.native="sendRegisterForm">Register</v-btn>
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
      showPass: false,
      showPassCon: false,
      form: {
        email: '',
        username: '',
        password: '',
        password_confirm: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        age: '',
      },

      rules: {
        required: value => !!value || 'Required',
        min: value => value.length > 3 || 'Min 3 chars',
        passMatch: value => value === this.form.password || 'Password you entered don\'t match',
        validAge: value => value > 17 && value < 51 || 'Age must be greater 17 and lower 50'
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'registration'
    ]),

    sendRegisterForm() {
      return this.registration(this.form)
    }
  }
}
</script>

<style scoped>

</style>
