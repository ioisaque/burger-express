import axios from 'axios';
import CONFIG from '~/config/dashboard';


const api = axios.create({
  baseURL: CONFIG.PATHS.API,
});

export default api;
