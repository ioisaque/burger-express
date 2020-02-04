import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bx.isaquecosta.com.br/webservices/app',
});

export default api;
