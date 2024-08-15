import api from '@/utils/api';
import { getToken, removeToken, setToken } from '@/utils/tokenStorge';
import { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';

export const authService = {
    login: async (username: string, password: string) => {
        try {
            const response = await api.post('/auth/login', { username, password });
            setToken(response.data.access_token);
            return jwtDecode(response.data.access_token);;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw error.response?.data;
              } else {
                throw error;
              }
        }
    },

    register: async (username: string, password: string) => {
        try {
            const response = await api.post('/users', { username, password });
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw error.response?.data;
              } else {
                throw error;
              }
        }
    },

    logout: () => {
        removeToken();
    },

    getCurrentUser: () => {
        const token = getToken();
        if (!token) return null;

        try {
            return jwtDecode(token);
        } catch (error) {
            return null;
        }
    }
};

