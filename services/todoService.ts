import { apiClient } from "@/lib/api";
import { Todo, ApiResponse } from "@/types";

export const todoService = {
    getAllTodos: async (): Promise<Todo[]> => {
        return apiClient<Todo[]>('/todo/all');
    },

    getTodos: async (): Promise<ApiResponse<Todo[]>> => {
        return apiClient<ApiResponse<Todo[]>>('/todo');
    },

    getTodoById: async (id: string): Promise<Todo> => {
        return apiClient<Todo>(`/todo/${id}`);
    },

    createTodo: async (todoData: Partial<Todo>): Promise<ApiResponse<Todo>> => {
        return apiClient<ApiResponse<Todo>>('/todo', {
            method: 'POST',
            body: JSON.stringify(todoData),
            useProxy: true
        });
    },

    updateTodo: async (id: string, todoData: Partial<Todo>): Promise<ApiResponse<Todo>> => {
        return apiClient<ApiResponse<Todo>>(`/todo/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(todoData),
            useProxy: true
        });
    },

    deleteTodo: async (id: string): Promise<void> => {
        return apiClient<void>(`/todo/${id}`, {
            method: 'DELETE',
            useProxy: true
        });
    },
};