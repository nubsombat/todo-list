import React from 'react'
import TodoItem from './TodoItem';
import { Todo } from '@/types/todo';

interface TodoListProps {
    todos: Todo[];
    onUpdate: (id: string, updates: { title?: string; description?: string; }) => void;
    onDelete: (id: string) => void;
}

const TodoList = ({ todos, onUpdate, onDelete }: TodoListProps) => {
    if (todos.length === 0) {
        return <p className="text-center text-gray-500">No todos available</p>;
    }

    return (
        <ul className="todo-list space-y-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TodoList