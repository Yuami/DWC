import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className={"input-group my-1"}>
          <input
            type="text"
            name="title"
            placeholder="Add todo..."
            value={this.state.title}
            onChange={this.onChange}
            className={"form-control"}
          />
          <span className="input-group-append">
            <button type="submit" className={"btn btn-primary"}>
              <i className="fas fa-plus-circle"></i> Add
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default AddTodo;
