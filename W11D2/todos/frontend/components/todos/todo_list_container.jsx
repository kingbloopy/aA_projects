
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
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);