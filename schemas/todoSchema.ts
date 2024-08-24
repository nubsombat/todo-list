import { z } from "zod";

export const todoFormSchema = z.object({
  title: z.string()
    .min(1, "Title is required")
    .max(100, "Title must not exceed 100 characters")
    .trim()
    .refine((val) => val.length > 0, "Title cannot be only whitespace"),

  description: z.string()
    .max(500, "Description must not exceed 500 characters")
    .trim()
    .optional(),
  completed: z.boolean().default(false),
});
