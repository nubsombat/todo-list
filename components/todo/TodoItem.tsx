import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Edit, Loader2, Trash2 } from "lucide-react";
import { Todo } from "@/types";

interface TodoItemProps {
    todo: Todo;
    isLoading: boolean;
    onEdit: (todo: Todo) => void;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

export default function TodoItem({ todo, isLoading, onEdit, onDelete, onToggleComplete }: TodoItemProps) {
    const createdAt = new Date(todo.created_at);
    return (
        <Card key={todo.id} className="mb-4 break-inside-avoid">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span className={`break-all ${todo.completed ? "line-through" : ""}`}>
                        {todo.title}
                    </span>
                    <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => onToggleComplete(todo.id)}
                    />
                </CardTitle>
                <p className="text-sm">Created on {format(createdAt, "PPpp")}</p>
            </CardHeader>
            <CardContent >
                <p className="break-all">{todo.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => onEdit(todo)} disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Edit className="mr-2 h-4 w-4" />}
                    Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => onDelete(todo.id)} disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}
