<template>
  <b-card title="Adicionar Condominio">
    <p-condominio-form :condominio="condominio">
      <template v-slot="condominioFilled">
        <b-btn
          class="mt-3 mx-auto px-5 text-uppercase"
          variant="primary"
          @click="addForm(condominioFilled.condominioData)"
        >
          <i class="fas fa-plus"></i>
          <span class="ml-2">Adicionar</span>
        </b-btn>
      </template>
    </p-condominio-form>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'

import _random from 'lodash/random'

import pCondominioForm from './_partials/CondominioForm'

export default {
  name: 'AddCondominio',

  components: {
    pCondominioForm
  },

  data () {
    return {
      condominio: this.createCondominioObject()
    }
  },

  methods: {
    ...mapActions('condominio', ['addCondominio']),

    addForm (condominio) {
      this.addCondominio(condominio).then(() => {
        this.$router.push('/')
      })
    },

    generateId () {
      return _random(0, 99999)
    },

    createCondominioObject () {
      return {
        nome: '',
        cnpj: '',
        email: '',
        logradouroEndereco: '',
        numeroEndereco: '',
        cidadeEndereco: '',
        estadoEndereco: '',
        cep: '',
        diaVencimentoCota: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
