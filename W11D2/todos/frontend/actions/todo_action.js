
export const RECEIVE_TODOS = "RECEIVE_TODOS"; // accepts an array of todos
export const RECEIVE_TODO = "RECEIVE_TODO"; // accepts a todo object

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo,
  };
};
