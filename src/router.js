import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./layouts/Default.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'condominios',
          component: () => import('./views/condominios'),
          props: true
        },
        {
          path: '/condominio/:id',
          name: 'mostrar-condominio',
          component: () => import('./views/condominios/ShowCondominio.vue'),
          props: true,
          beforeEnter: (to, from, next) => {
            store
              .dispatch('condominio/fetchCondominio', to.params.id)
              .then(() => {
                to.params.condominio = store.state.condominio.condominio
                next()
              })
              .catch(err => {
                if (err.response && err.response.status === 404) {
                  next({ name: '404', params: { resource: 'event' } })
                } else {
                  next({ name: 'network-issue' })
                }
              })
          }
        },
        {
          path: '/adicionar',
          name: 'adicionar-condominio',
          component: () => import('./views/condominios/AddCondominio.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/user/Login.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/errors/NotFound.vue'),
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: () => import('./views/errors/NetworkIssue.vue')
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

router.beforeResolve((to, from, next) => {
  let loggedIn = localStorage.getItem('token')

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({ name: 'login' })
    } else {
      store
        .dispatch('condominio/fetchCondominios')
        .then(() => {
          to.params.condominios = store.state.condominio.condominios
          next()
        })
        .catch(err => {
          if (err.response && err.response.status === 404) {
            next({ name: '404', params: { resource: 'event' } })
          } else {
            next({ name: 'network-issue' })
          }
        })
    }
  } else {
    next()
  }
})

export default router
