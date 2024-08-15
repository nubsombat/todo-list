import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getToken, removeToken } from './tokenStorge';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      removeToken()
      const router = useRouter();
      router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default api;