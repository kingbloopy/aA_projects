import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_action";
// import { RECEIVE_TODO } from "../actions/todo_action";



// const initialState = {}

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      const todosObj = {};
      action.todos.forEach(todo => {
        todosObj[todo.id] = todo;
      });
      return todosObj;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
