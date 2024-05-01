import { getUserTodoListAction } from "@/actions/todo.action";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
import { error } from "console";

export default async function Home() {
  const { userId } = auth();
  const todos = await getUserTodoListAction({ userId });

  return (
    <main className="container">
      <AddTodoForm userId={userId} />
      <TodosTable todos={todos} />
    </main>
  );
}
