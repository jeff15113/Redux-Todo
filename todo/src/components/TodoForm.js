import React, { Component } from "react";
import { connect } from "react-redux";
import { clearCompleted } from "../actions"
class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

clearCompleted = (e) => {
  e.preventDefault();
  this.props.clearCompleted();
}

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
        <button onClick={e => {this.clearCompleted(e)}}>Clear Completed</button>
      </form>
    );
  }
}

export default connect(null,{clearCompleted})(TodoForm);
