'use client'
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import { withAuth } from '@/components/withAuth';
import { useTodos } from '@/hooks/useTodos';
import React from 'react'

const TodoListPage = () => {
    const { todos, loading, error, addTodo, updateTodo, deleteTodo } = useTodos();

    if (loading) return <div>กำลังโหลดรายการ Todo...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            todo list
            <div>
                <TodoForm onAdd={addTodo} />
                <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
            </div>
        </div>
    );
}

export default withAuth(TodoListPage) 