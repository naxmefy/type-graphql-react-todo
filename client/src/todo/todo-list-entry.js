import React, { Component } from "react";
import moment from "moment";
import classNames from "classnames";

class TodoListEntry extends Component {
  render() {
    let listEntryClasses = classNames(
      "list-group-item d-flex justify-content-between align-items-center",
      {
        // if finished
        'list-group-item-success': this.props.todo.finishedAt,
        // if dueAt exists and dueAt passed and not finished
        'list-group-item-danger': this.props.todo.dueAt
          && moment().isAfter(this.props.todo.dueAt)
          && !this.props.todo.finishedAt
      }
    );

    return (
      <div className={listEntryClasses}>
        {this.props.todo.description}

        { this.props.todo.dueAt &&
          <span className="badge badge-danger badge-pill">{moment(this.props.todo.dueAt).format("DD.MM.YYYY HH:mm")}</span>
        }
      </div>
    );
  }
}

export default TodoListEntry;
