"use client";

import { deleteTodoListAction } from "@/actions/todo.action";
import { Pen, Trash } from "lucide-react";
import React, { useState } from "react";
import Spinner from "./Spinner";
import { Button } from "./ui/button";

const TodosTableActions = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Button size={"icon"}>
        <Pen size={16} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setIsLoading(true);
          await deleteTodoListAction({ id });
          setIsLoading(false);
        }}
      >
        {isLoading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
