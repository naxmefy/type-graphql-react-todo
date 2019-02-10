import { Resolver, ResolverInterface, Query, Arg, Mutation } from "type-graphql";
import { Todo } from "../schemas/Todo";
import { createTodoSamples } from "./TodoSamples";
import { TodoInput } from "../inputs/TodoInput";
import { plainToClass } from "class-transformer";

@Resolver(of => Todo)
export class TodoResolver {
  private readonly items: Todo[] = createTodoSamples();

  @Query(returns => [Todo], {description: "Get all todos. ALL!!!"})
  async todos(): Promise<Todo[]> {
    return await this.items;
  }

  @Query(returns => Todo, { nullable: true })
  async todo(@Arg("description") description: string): Promise<Todo | undefined> {
    return await this.items.find(todo => todo.description === description);
  }

  @Mutation(returns => Todo)
  async addTodo(@Arg("todo") todoInput: TodoInput): Promise<Todo> {
    const todo = plainToClass(Todo, {
      description: todoInput.description,
      dueAt: todoInput.dueAt,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    await this.items.push(todo);
    return todo;
  }
}
