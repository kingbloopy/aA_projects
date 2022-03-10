import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo } from "./actions/todo_action";
import { receiveSteps, receiveStep, removeStep } from "./actions/step_actions";
import Root from "./components/root";
import allTodos from "./reducers/selectors";
import * as TodoApi from './util/todo_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.store = configureStore();

  window.allTodos = allTodos;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.TodoApi = TodoApi;

  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;

  ReactDOM.render(<Root store={store} />, root);
});