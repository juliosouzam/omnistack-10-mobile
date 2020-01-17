import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.100.19.132:3333',
});

export default api;
