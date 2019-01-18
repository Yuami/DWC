import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddTodo from "./components/Todos/AddTodo";
import Todos from "./components/Todos/Todos";

import "./App.css";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Recoger mi habitación que da asquito",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Comer pizza esta semana",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Abrazar a Hitheart en caso de emergencia",
        completed: true
      }
    ]
  };

  markComplete = id => {
    const todos = this.state.todos;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" render={() => (
            <div className="container">
              <AddTodo addTodo={this.addTodo}/>
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </div>
          )}/>
          <Route path="/about" render={() => (
            <About/>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
