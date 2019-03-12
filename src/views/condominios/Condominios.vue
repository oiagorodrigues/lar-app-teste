<template>
  <div class="condominios">
    <c-card-condominio
      v-for="condominio in condominios"
      :key="condominio.id"
      :condominio="condominio"
      @click.native="showCondominio(condominio.id)"
    />
  </div>
</template>

<script>
const cCardCondominio = () => import('@/components/CardCondominio')

export default {
  name: 'Condominios',

  props: ['condominios'],

  components: {
    cCardCondominio
  },

  methods: {
    showCondominio (id) {
      this.$router.push({
        name: 'mostrar-condominio',
        params: { id: id }
      })
    }
  }
}
</script>
