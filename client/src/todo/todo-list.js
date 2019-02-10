import React, { Component } from "react";
import TodoListEntry from "./todo-list-entry";
import { Query } from "react-apollo";
import { TODOS_QUERY } from "../gql/queries";

class TodoList extends Component {
  render() {
    return (
      <Query query={TODOS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error: {error}</div>

          return (
            <div className="list-group list-group-flush">
              {data.todos.map((todo, index) => (
                <TodoListEntry todo={todo} key={index} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default TodoList;
