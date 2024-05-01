import { z } from "zod";

export const TodoFormSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
  body: z
    .string()
    .max(80, {
      message: "Short Description must not be longer than 80 characters.",
    })
    .optional(),
});

export type TodoFormValues = z.infer<typeof TodoFormSchema>;
