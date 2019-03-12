<template>
  <div class="default-layout">
    <b-navbar
      toggleable="md"
      type="light"
      variant="link"
    >
      <b-navbar-brand to="/">LarApp</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse
        is-nav
        id="nav_collapse"
      >
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/">
              <i class="fas fa-home"></i>
              Condominios
            </b-nav-item>
            <b-nav-item :to="{ name: 'adicionar-condominio' }">
              <i class="fas fa-plus"></i>
              Adicionar
            </b-nav-item>
            <b-nav-item @click="deslogar">Deslogar</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <main>
      <router-view :key="$router.fullPath" />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',

  methods: {
    ...mapActions(['logOut']),

    deslogar () {
      this.logOut()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
.navbar {
  margin-left: -15px;
  margin-right: -15px;
}
</style>
