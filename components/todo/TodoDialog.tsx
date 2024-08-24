import { z } from "zod";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Todo } from "@/types";
import { todoFormSchema } from "@/schemas/todoSchema";

interface TodoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (todo: Partial<Todo>) => void;
  todo?: Todo | null;
}

export default function TodoDialog({ isOpen, onClose, onSave, todo }: TodoDialogProps) {
  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");
  const [errors, setErrors] = useState<{ title?: string }>({});

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [todo]);

  const handleSubmit = () => {
    const validationResult = todoFormSchema.safeParse({ title, description });

    if (!validationResult.success) {
      const validationErrors = validationResult.error.flatten().fieldErrors;
      setErrors({
        title: validationErrors.title?.[0],
      });
      return;
    }

    onSave({ title, description });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>{todo ? "Edit Todo" : "Add New Todo"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="col-span-4"
            />
            {errors.title && <p className="text-red-500 col-span-3">{errors.title}</p>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="col-span-4"
            />
          </div>
        </div>
        <Button onClick={handleSubmit}>{todo ? "Update Todo" : "Save Todo"}</Button>
      </DialogContent>
    </Dialog>
  );
}
