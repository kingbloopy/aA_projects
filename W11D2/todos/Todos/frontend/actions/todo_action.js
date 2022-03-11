
export const RECEIVE_TODOS = "RECEIVE_TODOS"; // accepts an array of todos
export const RECEIVE_TODO = "RECEIVE_TODO"; // accepts a todo object
export const REMOVE_TODO = "REMOVE_TODO";
import * as todosAPI from "../util/todo_api_util";

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

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo,
  };
}


export const createTodo = (todo) => (dispatch) => {
  return todosAPI.createTodo(todo)
    .then(todo => dispatch(receiveTodo(todo)))
}

// fetchalltodos is a function that returns a function that takes in dispatch
export const fetchAllTodos = () => (dispatch) => { 
  return ( // returns a function
    todosAPI.fetchAllTodos() // ajax promise
    .then(todos => dispatch(receiveTodos(todos))) // uses promise to dispatch a pojo with a response
  );
}