import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(type){
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  // renderErrors(){
  //   return(
  //     <ul>
  //       {this.props.errors.map((error) => (
  //         <li>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render(){
    return(
      <div>
        <h2>Please, {this.props.formType}</h2>
        {/* <h2>Please, {this.props.formType} or {this.props.link}</h2> */}
        <form>
          <ul>
            {this.props.errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
          <br/>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.update('username')}/>
          </label>
          <br/>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>
          <br/>
          <button onSubmit={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;