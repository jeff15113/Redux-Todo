import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import { addTodo, completeTodo } from "./actions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: ""
    };
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    // const task = this.state.task;
    const { task } = this.state;
    const newTodo = {
      id: this.props.tasks.length,
      text: task,
      completed: false
    };

    this.props.addTodo(newTodo);
    this.setState({
      task: ""
    });
  };

  render() {
    console.log(this.props.tasks);
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>  
        <TodoList taskData={this.props.tasks} />
        <TodoForm handleAddClick={this.handleAddClick} taskname={this.state.task} handleChange={this.handleChange} addTodo={this.addTodo}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
  tasks: state.reducertasks
});

export default connect(
  mapStateToProps,
  { addTodo }
)(App);
