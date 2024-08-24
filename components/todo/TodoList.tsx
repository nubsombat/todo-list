'use client'
import TodoItem from "@/components/todo/TodoItem";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Todo } from "@/types";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import TodoDialog from "./TodoDialog";
import { useTodos } from "@/hooks/useTodos";

export default function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
    const {
        todos,
        createTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
    } = useTodos(initialTodos);
    const { toast } = useToast()
    const handleError = useErrorHandler();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

    const handleSave = async (todo: Partial<Todo>) => {
        try {
            if (editingTodo) {
                const isDataChanged = editingTodo.title !== todo.title || editingTodo.description !== todo.description;

                if (isDataChanged) {
                    await updateTodo(editingTodo.id, todo);
                    toast({
                        title: "Todo updated",
                        description: "Your todo has been updated successfully.",
                    });
                }
            } else {
                await createTodo(todo);
                toast({
                    title: "Todo created",
                    description: "Your new todo has been added successfully.",
                });
            }

        } catch (error) {
            handleError(error);
        }
        setEditingTodo(null);
        setIsDialogOpen(false);

    };

    const handleDelete = async (id: string) => {
        try {
            await deleteTodo(id);
            toast({
                title: "Todo deleted",
                description: "The todo has been deleted successfully.",
            });
        } catch (error) {
            handleError(error);
        }
    };

    const handleToggleComplete = async (id: string) => {
        try {
            const todo = todos.find((t) => t.id === id);
            if (todo) {
                await toggleComplete(id);
                toast({
                    title: todo.completed ? "Todo marked incomplete" : "Todo marked complete",
                    description: `The todo "${todo.title}" has been ${todo.completed ? "marked as incomplete" : "completed"}.`,
                });
            }
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <div>
            <Button onClick={() => setIsDialogOpen(true)} className="mb-4">
                <PlusCircle className="mr-2 h-4 w-4" /> Add New Todo
            </Button>

            <TodoDialog
                isOpen={isDialogOpen}
                onClose={() => {
                    setIsDialogOpen(false);
                    setEditingTodo(null);
                }}
                onSave={handleSave}
                todo={editingTodo}
            />

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onEdit={(todo) => {
                            setEditingTodo(todo);
                            setIsDialogOpen(true);
                        }}
                        onDelete={handleDelete}
                        onToggleComplete={handleToggleComplete}
                    />
                ))}
            </div>
        </div>
    );
}
