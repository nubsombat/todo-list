import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { todoFormSchema } from "@/schemas/todoSchema";
import { Todo } from "@/types";
import * as z from "zod";

interface TodoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (todo: Partial<Todo>) => void;
  todo?: Todo | null;
}

export default function TodoDialog({ isOpen, onClose, onSave, todo }: TodoDialogProps) {
  const defaultValues = {
    title: todo?.title || "",
    description: todo?.description || "",
  };

  const { control, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
  });

  useEffect(() => {
    if (todo) {
      reset(todo);
    } else {
      reset(defaultValues);
    }
  }, [todo, reset]);

  const onSubmit = (data: z.infer<typeof todoFormSchema>) => {
    onSave(data);
    reset(defaultValues);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>{todo ? "Edit Todo" : "Add New Todo"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Title"
                    className="col-span-4"
                  />
                )}
              />
              {errors.title && <p className="text-red-500 col-span-3">{errors.title.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Description"
                    className="col-span-4"
                  />
                )}
              />
              {errors.description && <p className="text-red-500 col-span-3">{errors.description.message}</p>}
            </div>
          </div>
          <Button type="submit">{todo ? "Update Todo" : "Save Todo"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
