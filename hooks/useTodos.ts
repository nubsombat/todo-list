import { useState, useEffect } from "react";
import { todoService } from "@/services/todoService";
import { Todo } from "@/types";
import { logError } from "@/utils/errorHandling";

export function useTodos(initialTodos: Todo[]) {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    useEffect(() => {
        setTodos(initialTodos);
    }, [initialTodos]);

    const createTodo = async (todo: Partial<Todo>) => {
        try {
            const { data: newTodo } = await todoService.createTodo(todo);
            setTodos([...todos, newTodo]);
        } catch (error) {
            logError(error);
            throw error;
        }
    };

    const updateTodo = async (id: string, todo: Partial<Todo>) => {
        try {
            const { data: updatedTodo } = await todoService.updateTodo(id, todo);
            setTodos(todos.map((t) => (t.id === id ? { ...t, ...updatedTodo } : t)));
        } catch (error) {
            logError(error);
            throw error;
        }
    };

    const deleteTodo = async (id: string) => {
        try {
            await todoService.deleteTodo(id);
            setTodos(todos.filter((t) => t.id !== id));
        } catch (error) {
            logError(error);
            throw error;
        }
    };

    const toggleComplete = async (id: string) => {
        try {
            const todo = todos.find((t) => t.id === id);
            if (todo) {
                const { data: updatedTodo } = await todoService.updateTodo(id, {
                    completed: !todo.completed,
                });
                setTodos(todos.map((t) => (t.id === id ? { ...todo, ...updatedTodo } : t)));
            }
        } catch (error) {
            logError(error);
            throw error;
        }
    };

    return {
        todos,
        createTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
    };
}
