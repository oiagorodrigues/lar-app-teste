import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/services/http'
import * as condominio from './modules/condominio'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    condominio
  },

  state: {
    token: ''
  },

  mutations: {
    SET_USER: (state, data) => {
      state.token = data
    },

    REMOVE_TOKEN: state => {
      state.token = ''
    }
  },

  actions: {
    logIn: ({ commit }, data) => {
      return http._login(data).then(res => {
        let token = res.headers.authorization.split(' ').splice(1)

        localStorage.setItem('token', token)
        commit('SET_USER', token)
      })
    },

    logOut: ({ commit }) => {
      localStorage.removeItem('token')
      commit('REMOVE_TOKEN')
    }
  }
})

export default store
