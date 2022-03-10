import React from "react";
import ToDoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {
          // props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)
          props.todos.map(todo => <ToDoListItem todo={todo} key={todo.id} removeTodo={props.removeTodo} receiveTodo={props.receiveTodo}/>)
        }
      </ul>
      <TodoForm receiveTodo={props.receiveTodo} />
    </div>
  );
}

export default TodoList;