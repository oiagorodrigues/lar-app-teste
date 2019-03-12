<template>
  <p-condominio-form :condominio="condominio">
    <template v-slot="slotProps">
      <b-row class="mx-0 w-100 px-2 mt-3">
        <b-btn
          class="mr-2 flex-fill"
          variant="outline-danger"
          @click="$emit('close-modal')"
        >
          <i class="fas fa-times fa-lg"></i>
        </b-btn>

        <b-btn
          class="flex-fill"
          variant="success"
          @click="confirmEdit(slotProps.condominioData)"
        >
          <i class="fas fa-check fa-lg"></i>
        </b-btn>
      </b-row>
    </template>
  </p-condominio-form>
</template>

<script>
import { mapActions } from 'vuex'

import NProgress from 'nprogress'

import pCondominioForm, { props as condominioProps } from './CondominioForm'

export const props = {
  ...condominioProps
}

export default {
  name: 'EditForm',

  components: {
    pCondominioForm
  },

  props,

  methods: {
    ...mapActions('condominio', ['updateCondominio']),

    confirmEdit (condominioUpdated) {
      NProgress.start()

      this.updateCondominio(condominioUpdated).then(() => {
        this.$router.go()
      })
    }
  }
}
</script>

<style lang="scss">
[role='dialog'] {
  padding-left: 0 !important;
}
</style>
