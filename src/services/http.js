import axios from 'axios'

const AUTH_TOKEN = localStorage.getItem('token')

const http = axios.create({
  baseURL: 'http://134.209.76.67:8201'
})

http.defaults.timeout = 5000
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.common['Authorization'] = AUTH_TOKEN

// login
const _login = data => http.post('/login', data)

// add condominio
const _addCondominio = data => http.post(`/v1/condominios`, data)

// get all
const _getAllCondominios = () =>
  http.get('/v1/condominios', {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })

// get condominio
const _getCondominio = id => http.get(`/v1/condominios/${id}`)

// update condominio
const _updateCondominio = data => http.put(`/v1/condominios/${data.id}`, data)

// remove condominio
const _removeCondominio = id => http.delete(`/v1/condominios/${id}`)

export default {
  _login,
  _addCondominio,
  _getAllCondominios,
  _getCondominio,
  _updateCondominio,
  _removeCondominio
}
