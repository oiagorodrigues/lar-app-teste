<template>
  <b-card class="card-condominio mb-4 border-0 -shadow">
    <h1 class="presentation">
      <i class="fas fa-home text-primary"></i>
      <span class="ml-3 text-secondary">{{ condominio.nome }}</span>
    </h1>
    <h2 class="presentation">
      <i class="fas fa-map-marked-alt text-info"></i>
      <span class="ml-3 text-secondary">{{ condominio.cidadeEndereco}}</span>
    </h2>
  </b-card>
</template>

<script>
export default {
  name: 'CardCondominio',

  props: {
    condominio: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card-condominio {
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
      0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
}

.presentation {
  font-size: 1.25rem;
  text-align: center;
}
</style>
