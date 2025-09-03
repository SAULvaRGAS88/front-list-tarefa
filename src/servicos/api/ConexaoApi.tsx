// ambiente de conexão com a API

import axios from 'axios'

// url da API backend local
const urlApi = 'http://localhost:3000'

export const conexaoApi = axios.create({
    baseURL: urlApi,
})