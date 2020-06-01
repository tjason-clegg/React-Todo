import React from "react";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList";

const todoArray = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoArray: todoArray,
    };
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todoArray: [...this.state.todoArray, newTask],
    });
  };

  toggleTask = (taskId) => {
    this.setState({
      todoArray: this.state.todoArray.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  clearCompleted = (e) => {
    this.setState({
      todoArray: this.state.todoArray.filter((e) => {
        return e.completed === false;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          toggleTask={this.toggleTask}
          todoArray={this.state.todoArray}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
