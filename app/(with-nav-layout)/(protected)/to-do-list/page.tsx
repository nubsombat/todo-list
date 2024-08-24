import { Metadata } from "next";
import { todoService } from "@/services/todoService";
import TodoList from "@/components/todo/TodoList";

export const metadata: Metadata = {
    title: "Your Tasks | TodoMaster",
    description: "View and manage your tasks efficiently with TodoMaster",
  };

export default async function TodoListPage() {
  const { data: todos } = await todoService.getTodos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Todo List</h1>
      <TodoList initialTodos={todos} />
    </div>
  );
}