import React from "react";

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: new Date().getTime(),
      title: '',
      body: '',
      done: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      id: new Date().getTime(),
      title: '',
      body: '',
      done: false
    });
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }
  
  updateBody(e){
    this.setState({body: e.target.value});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a Todo</h2>
        <label>Title:
          <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        </label>
        <label>Body:
          <input type="text" value={this.state.body} onChange={this.updateBody}/>
        </label>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;