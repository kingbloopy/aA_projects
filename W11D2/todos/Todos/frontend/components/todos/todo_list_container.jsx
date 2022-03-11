
import TodoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import {connect} from "react-redux";
import { receiveTodo, fetchAllTodos, createTodo } from "../../actions/todo_action";

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    fetchAllTodos: () => dispatch(fetchAllTodos()),
    createTodo: (todo) => dispatch(createTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);