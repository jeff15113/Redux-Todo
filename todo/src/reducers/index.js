import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialstate = {
  reducertasks: [
    {
      id: 0,
      text: "Homework",
      completed: false
    }
  ]
};

export const rootReducer = (state = initialstate, action) => {
  console.log(action)
  switch (action.type) {
    case COMPLETE_TODO:
      return {reducertasks: state.reducertasks.map(task => {
        return task.id === action.payload ? {...task, completed: true}: task
      })}

    case ADD_TODO:
      return Object.assign({}, state, {
        reducertasks: [...state.reducertasks, action.payload]
        
      });
    default:
      return state;
  }
};
