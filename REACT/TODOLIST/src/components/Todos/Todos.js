import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {

  render() {
    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {this.props.todos.map(todo => (
            <li className={"list-group-item"}>
              <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
