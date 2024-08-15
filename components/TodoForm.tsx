import React, { useState } from 'react'

interface TodoFormProps {
    onAdd: (title: string, description: string) => void;
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                className="border p-2 rounded-md"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description"
                className="border p-2 rounded-md"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Add Task
            </button>
        </form>
    );
}

export default TodoForm