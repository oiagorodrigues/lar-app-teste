<template>
  <div class="login">
    <b-form
      @submit.prevent="submit"
      class="loginForm"
    >
      <b-form-group label="Usuário">
        <b-form-input
          v-model="loginData.username"
          type="email"
        />
      </b-form-group>

      <b-form-group label="Senha">
        <b-form-input
          v-model="loginData.password"
          type="password"
        />
      </b-form-group>

      <b-btn
        type="submit"
        variant="primary"
        text="entrar"
        block
      >Entrar</b-btn>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import NProgress from 'nprogress'

export default {
  name: 'Login',

  data () {
    return {
      loginData: this.createFreshLoginObject()
    }
  },

  methods: {
    ...mapActions(['logIn']),

    createFreshLoginObject () {
      return {
        username: '',
        password: ''
      }
    },

    submit (action) {
      NProgress.start()

      this.logIn(this.loginData)
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
          NProgress.done()
          this.login = this.createFreshLoginObject()
        })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginForm {
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0px 1rem rgba(lightgray, 0.25), 0 0px 4rem rgba(lightgray, 0.5);
}
</style>
