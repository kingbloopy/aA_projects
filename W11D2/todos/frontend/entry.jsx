import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodos, receiveTodo } from "./actions/todo_action";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.store = configureStore();
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  ReactDOM.render(<h1>Todos App</h1>, root);
});