"use server";

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
};
export const createTodoListAction = async ({ title, body }: TodoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
    },
  });
};
export const updateTodoListAction = async () => {};
export const deleteTodoListAction = async () => {};
