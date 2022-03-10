import React from "react";

// const ToDoListItem = (props) => {
//   return (
//     <div>
//       <li>{props.todo.title}</li>
//       <button onClick={this.handleDelete.bind(this)} >Delete Todo</button>
//     </div>
//   );
// }

class ToDoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.todo.id,
      title: this.props.todo.title,
      body: this.props.todo.body,
      done: this.props.todo.done
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleRemove(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleDone(e){
    e.preventDefault();
    if (this.props.todo.done === false){
      this.setState({ done: true });
    } else {
      this.setState({ done: false });
    }
    this.props.receiveTodo(this.state);
  }

  render(){
    return (
      <div>
        <li>{this.props.todo.title}, Completed: {JSON.stringify(this.props.todo.done)}</li>
        <button onClick={this.handleRemove} >Delete Todo</button>
        <button onClick={this.handleDone} >Done?</button>
      </div>
    );
  }
}

export default ToDoListItem;