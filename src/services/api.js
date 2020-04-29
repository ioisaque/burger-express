import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bx.isaquecosta.com.br/webservices/app',
  // baseURL: 'http://192.168.0.200/bx.isaquecosta.com.br/webservices/app',
});

export default api;
