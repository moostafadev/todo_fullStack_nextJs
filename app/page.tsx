import AddTodoForm from "@/components/AddTodoForm";

export default function Home() {
  // const todos = await getTodoListAction();

  return (
    <main className="container">
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      <AddTodoForm />
    </main>
  );
}
