<template>
  <b-card class="show-condominio border-0 shadow-sm">
    <h1 class="mb-4">{{ condominio.nome }}</h1>

    <b-table
      stacked
      :items="items"
    />

    <div class="card-actions d-flex">
      <b-btn
        class="w-100"
        @click="deleteCondominio"
        variant="outline-danger"
      >
        <i class="far fa-trash-alt"></i>
        <span class="ml-2">Remover</span>
      </b-btn>

      <b-btn
        class="ml-2 w-100"
        variant="outline-info"
        v-b-modal.edit
      >
        <i class="far fa-edit"></i>
        <span class="ml-2">Editar</span>
      </b-btn>

    </div>

    <b-modal
      id="edit"
      ref="editModal"
      title="Editar Condomínio"
      hide-footer
      lazy
    >
      <p-edit-form
        :condominio="condominio"
        @close-modal="closeModal"
      />
    </b-modal>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'

import NProgress from 'nprogress'

import pEditForm, { props as editProps } from './_partials/EditForm'

export default {
  name: 'ShowCondominios',

  components: {
    pEditForm
  },

  props: {
    ...editProps
  },

  data () {
    return {
      items: [
        {
          endereco: `${this.condominio.logradouroEndereco}, ${
            this.condominio.numeroEndereco
          }`,
          cep: this.condominio.cep,
          logradouro: this.condominio.logradouroEndereco,
          cidade: this.condominio.cidadeEndereco,
          estado: this.condominio.estadoEndereco,
          cnpj: this.condominio.cnpj,
          email: this.condominio.email,
          vencimento_cota: `Dia ${this.condominio.diaVencimentoCota}`
        }
      ]
    }
  },

  methods: {
    ...mapActions('condominio', ['removeCondominio']),

    closeModal () {
      this.$refs.editModal.hide()
    },

    deleteCondominio () {
      NProgress.start()

      this.removeCondominio(this.condominio.id).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
