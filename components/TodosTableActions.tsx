"use client";

import { deleteTodoListAction } from "@/actions/todo.action";
import { Trash } from "lucide-react";
import React, { useState } from "react";
import Spinner from "./Spinner";
import { Button } from "./ui/button";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        disabled={isLoading}
        onClick={async () => {
          setIsLoading(true);
          await deleteTodoListAction({ id: todo.id });
          setIsLoading(false);
        }}
      >
        {isLoading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
