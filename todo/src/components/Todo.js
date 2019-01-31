import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <p
      onClick={() => props.handleClickComplete(props.id)}
      style={props.completed ? { textDecoration: "line-through" } : null}
    >
      {props.todo}
    </p>
  );
};

export default Todo;
