export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
        payload: ''
    };
}

export const completeTodo = index => {
  return {
    type: COMPLETE_TODO,
    payload: index
  };
};
