import http from '@/services/http'

export const namespaced = true

export const state = {
  condominios: [],
  condominio: {}
}

export const mutations = {
  SET_CONDOMINIOS: (state, data) => {
    state.condominios = data
  },

  SET_CONDOMINIO: (state, data) => {
    state.condominio = data
  }
}

export const actions = {
  fetchCondominios: ({ commit }) => {
    return http
      ._getAllCondominios()
      .then(res => {
        commit('SET_CONDOMINIOS', res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  },

  fetchCondominio: ({ commit }, id) => {
    return http
      ._getCondominio(id)
      .then(res => {
        commit('SET_CONDOMINIO', res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  },

  updateCondominio: (context, data) => {
    return http
      ._updateCondominio(data)
      .then(() => {})
      .catch(err => {
        console.log(err.message)
      })
  },

  removeCondominio: (context, data) => {
    return http
      ._removeCondominio(data)
      .then(() => {})
      .catch(err => {
        console.log(err.message)
      })
  },

  addCondominio: (context, data) => {
    return http
      ._addCondominio(data)
      .then(() => {})
      .catch(err => {
        console.log(err.message)
      })
  }
}
