<template>
  <b-container
    id="app"
    fluid
  >
    <transition name="fade" mode="out-in">
      <router-view :key="$router.fullPath" />
    </transition>
  </b-container>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    this.$store.commit('SET_USER', localStorage.getItem('token') || {})
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;

  @include media-breakpoint-up(md) {
    width: 600px;
    margin: auto;
  }
}

html,
body {
  height: 100%;
  margin: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
