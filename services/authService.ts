import { apiClient } from "@/lib/api";
import { ApiResponse, LoginCredentials, LoginResponse, RegisterData, User } from "@/types";

export const authService = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        return apiClient<LoginResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            useProxy: true
        });
    },

    register: async (userData: RegisterData): Promise<ApiResponse<User>> => {
        return apiClient<ApiResponse<User>>('/users', {
            method: 'POST',
            body: JSON.stringify(userData),
            useProxy: true
        });
    },
};