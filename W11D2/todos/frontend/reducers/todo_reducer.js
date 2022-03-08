import { RECEIVE_TODO } from "./actions/todo_action";

const todoReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState; 
    default:
      return state;
  }
};

export default todoReducer;