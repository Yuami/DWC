import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyleCheck = () => {
    const completed = this.props.todo.completed;
    return {
    textDecoration:  completed ? "line-through" : "none",
    color:  completed ? "line-through" : "none",
    }
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
        <p>
          <label className="pure-material-checkbox">
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
              defaultChecked={completed}
            />
            <span style={this.getStyleCheck()}> {title}</span>
          </label>
          <button
            className={"btn btn-danger float-right"}
            onClick={this.props.delTodo.bind(this, id)}
          >
            Delete
          </button>
        </p>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
