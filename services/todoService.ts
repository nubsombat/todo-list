import { Todo, TodoCreated } from "@/types/todo";
import api from "@/utils/api";

export const todoService = {
    getAll: () => api.get('/todo/all'),
    getAllByUser: () => api.get(`/todo`),
    getById: (id: string) => api.get(`/todo/${id}`),
    create: (todo: TodoCreated) => api.post('/todo', todo),
    update: (id: string, todo: Todo) => api.patch(`/todo/${id}`, todo),
    delete: (id: string) => api.delete(`/todo/${id}`),
};