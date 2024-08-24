import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Edit, Trash2 } from "lucide-react";
import { Todo } from "@/types";

interface TodoItemProps {
    todo: Todo;
    onEdit: (todo: Todo) => void;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

export default function TodoItem({ todo, onEdit, onDelete, onToggleComplete }: TodoItemProps) {
    const createdAt = new Date(todo.created_at);
    return (
        <Card key={todo.id} className="mb-4 break-inside-avoid">
            <CardHeader>
                <CardTitle className="flex items-center justify-between ">
                    <span className={todo.completed ? "line-through" : ""}>
                        {todo.title}
                    </span>
                    <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => onToggleComplete(todo.id)}
                    />
                </CardTitle>
                <p className="text-sm">Created on {format(createdAt, "PP")}</p>
            </CardHeader>
            <CardContent>
                <p >{todo.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => onEdit(todo)}>
                    <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => onDelete(todo.id)}>
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
            </CardFooter>
        </Card>
    );
}
