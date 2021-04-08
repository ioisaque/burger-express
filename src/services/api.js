import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.lmsalgados.com.br/',
  baseURL: 'http://192.168.0.200/delivery.ideyou.com.br/webservices',
});

export default api;
