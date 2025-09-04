// ambiente de conexão com a API

import axios from 'axios'

// url da API backend local
const urlApi = 'http://localhost:3000'

// url da API backend em produção
// const urlApi = 'https://api.lista-tarefas.com'

export const conexaoApi = axios.create({
    baseURL: urlApi,
})