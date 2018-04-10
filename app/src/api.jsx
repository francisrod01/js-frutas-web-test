import axios from 'axios';

import { appConfig } from './constants';

const baseURL = appConfig.apiUrl;

const api = axios.create({
  baseURL,
});

const apiCalls = {
  loadFruits: () => api.get('fruits'),
  getFruit: id => api.get(`fruits/${id}`),
};

export default apiCalls;
