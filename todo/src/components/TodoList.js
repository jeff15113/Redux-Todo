import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import {completeTodo} from '../actions';

const TodoList = props => {
  return (
    <div>
      {props.taskData.map((todo, index) => (
        <Todo
          todo={todo.text}
          key={index}
          id={index}
          completed={todo.completed}
          handleClickComplete={props.completeTodo}
        />
      ))}
    </div>
  );
};


export default connect(null, {completeTodo})(TodoList);
