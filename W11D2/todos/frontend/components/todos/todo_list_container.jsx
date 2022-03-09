
import TodoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import {connect} from "react-redux";
import { receiveTodos } from "../../actions/todo_action";

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recieveTodos: (todo) => dispatch(receiveTodos(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);