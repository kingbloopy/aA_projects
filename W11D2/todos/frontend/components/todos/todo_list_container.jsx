import React from "react";
import TodoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import {connect} from "react-redux";
import { receiveTodo } from "../../actions/todo_action";

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recieveTodo: (todo) => dispatch(receiveTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);