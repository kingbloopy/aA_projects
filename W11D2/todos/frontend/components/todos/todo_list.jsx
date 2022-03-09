import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {
          props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)
          // props.todos.map(todo => <ToDoListItem todo={todo} />)
        }
      </ul>
    </div>
  );
}

export default TodoList;