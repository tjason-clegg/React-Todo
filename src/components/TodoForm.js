import React from "react";
import ReactDOM from "react-dom";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
