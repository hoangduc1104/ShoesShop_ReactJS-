import axios from 'axios';
import apiConfig from './apiConfig';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      const data = response.data;
      if (data) {
        return data;
      }
      return [];
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
