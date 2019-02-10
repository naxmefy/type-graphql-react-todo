import { Todo } from "../schemas/Todo";
import { plainToClass } from "class-transformer";

export function createTodoSamples() {
  return plainToClass(Todo, [
    {
      description: "My first todo entry",
      finishedAt: null,
      dueAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: "My second todo entry",
      finishedAt: null,
      dueAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: "Need to buy fresh meet for barbecue",
      finishedAt: null,
      dueAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}
