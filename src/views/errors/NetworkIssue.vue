<template>
  <div>
    <h1>Uh-Oh!</h1>
    <h3>
      It looks like you're experiencing some network issues, please refresh your
      page.
    </h3>
    <router-link :to="{ name: 'condominios' }">
      or go back to Home Page
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NetworkIssue'
}
</script>

<style scoped></style>
