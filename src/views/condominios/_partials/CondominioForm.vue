<template>
  <b-form-row @submit.prevent>
    <BaseInput
      class="col-12"
      v-model="condominioData.nome"
      label="Nome"
      required
    />

    <BaseInput
      class="col-12 col-md-9"
      v-model="condominioData.email"
      label="email"
      type="email"
      required
    />

    <BaseInput
      class="col-12 col-md-3"
      v-model="condominioData.diaVencimentoCota"
      label="vencimento"
      required
    />

    <BaseInput
      class="col-12 col-md-9"
      v-model="condominioData.cnpj"
      v-mask="'##.###.###/####-##'"
      label="cnpj"
      required
    />

    <BaseInput
      class="col-12 col-md-3"
      v-model="condominioData.cep"
      v-mask="'#####-###'"
      label="cep"
      required
    />

    <BaseInput
      class="col-12 col-md-9"
      v-model="condominioData.logradouroEndereco"
      label="logradouro"
      required
    />

    <BaseInput
      class="col-12 col-md-3"
      v-model="condominioData.numeroEndereco"
      label="número"
      required
    />

    <BaseInput
      class="col-12 col-md-9"
      v-model="condominioData.cidadeEndereco"
      label="cidade"
      required
    />

    <BaseInput
      class="col-12 col-md-3"
      v-model="condominioData.estadoEndereco"
      v-mask="'AA'"
      label="estado"
      required
    />

    <slot :condominioData="condominioData"></slot>
  </b-form-row>
</template>

<script>
import { mask } from 'vue-the-mask'

export const props = {
  condominio: {
    type: Object,
    required: true
  }
}

export default {
  name: 'CondominioForm',

  directives: { mask },

  props,

  computed: {
    condominioData () {
      return { ...this.condominio }
    }
  }
}
</script>

<style scoped>
</style>
