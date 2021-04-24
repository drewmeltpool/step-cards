import { Api } from './api.js'

const api = new Api()
await api.login(localStorage.getItem('email'), localStorage.getItem('password'))

export { api }
