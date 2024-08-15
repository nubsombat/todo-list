'use client'
import { Todo } from '@/types/todo';
import React, { useState } from 'react'
interface TodoItemProps {
    todo: Todo;
    onUpdate: (id: string, updates: { title?: string; description?: string; }) => void;
    onDelete: (id: string) => void;
}
const TodoItem = ({ todo, onUpdate, onDelete }: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedDescription, setEditedDescription] = useState(todo.description);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        if (editedTitle.trim()) {
            onUpdate(todo.id, { title: editedTitle, description: editedDescription });
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setEditedTitle(todo.title);
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <button onClick={handleSave}>บันทึก</button>
                    <button onClick={handleCancel}>ยกเลิก</button>
                </>
            ) : (
                <>
                    <span className="todo-title">{todo.title}</span>
                    <button onClick={handleEdit}>แก้ไข</button>
                    <button onClick={handleDelete}>ลบ</button>
                </>
            )}
        </li>
    );
}

export default TodoItem