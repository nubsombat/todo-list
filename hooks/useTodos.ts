import { todoService } from '@/services/todoService';
import { Todo } from '@/types/todo';
import { useState, useEffect } from 'react';

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTodosByUser();
    }, []);

    const fetchTodosByUser = async () => {
        try {
            setLoading(true);
            const response = await todoService.getAllByUser();
            console.log('fetchTodosByUser ', response)
            setTodos(response.data.data);
            setError(null);
        } catch (err) {
            setError('เกิดข้อผิดพลาดในการโหลดรายการ Todo');
        } finally {
            setLoading(false);
        }
    };


    const addTodo = async (title: string, description: string) => {
        try {
            const response = await todoService.create({ title, description });
            setTodos([...todos, response.data.data]);
        } catch (err) {
            setError('เกิดข้อผิดพลาดในการเพิ่ม Todo');
        }
    };

    const updateTodo = async (id: string, updates) => {
        try {
            await todoService.update(id, updates);
            setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updates } : todo));
        } catch (err) {
            setError('เกิดข้อผิดพลาดในการอัปเดต Todo');
        }
    };

    const deleteTodo = async (id: string) => {
        try {
            await todoService.delete(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (err) {
            setError('เกิดข้อผิดพลาดในการลบ Todo');
        }
    };

    return { todos, loading, error, addTodo, updateTodo, deleteTodo };
}