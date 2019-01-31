import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.taskname}
          onChange={this.props.handleChange}
          name="task"
        />
        <button onClick={e => {this.props.addTodo(e)}}>Add Task</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
