import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({description: "Object represents a todo entry"})
export class Todo {
  // TODO: we add an ID field later for database usage
  // @Field(type => ID)
  // readonly id: string

  @Field({description: "Field represents central information of todo entry"})
  description: string;

  @Field({nullable: true, description: "Field represents state of todo entry. Finished or not"})
  finishedAt?: Date;

  @Field({nullable: true, description: "Field represents a due date for todo entry"})
  dueAt?: Date;

  @Field({description: "Field represents date when todo entry was created"})
  createdAt: Date;

  @Field({description: "Field represents date when todo entry was last modified"})
  updatedAt: Date;
}
