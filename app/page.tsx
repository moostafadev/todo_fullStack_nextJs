import { getTodoListAction } from "@/actions/todo.action";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoListAction();

  return (
    <main className="container">
      <AddTodoForm />
      <TodosTable todos={todos} />
    </main>
  );
}
