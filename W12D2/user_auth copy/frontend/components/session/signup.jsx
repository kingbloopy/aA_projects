import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type) {
    return (e) => {
      // will only update the value that is being changed
      this.setState({[type]: e.target.value})
    }
  }

  handleSubmit(e) {
    // prevent page to rerender when there is a post request
    e.preventDefault();
    // console.log(this.props.createNewUser);
    // console.log(this.state);
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/chirps'));
    // have access to history bc component is wrapped in route
  }

  render() {
    return (
      <div className='session-form'>
        <h1>Sign Up</h1>
        <form>

          <label>Username:
            <input 
            type='text' 
            value={this.state.username}
            onChange={this.handleInput('username')}
            />
          </label>

          <label>Email:
            <input 
            type='text' 
            value={this.state.email}
            onChange={this.handleInput('email')}
            />
          </label>

          <label>Password:
            <input 
            type='password' 
            value={this.state.password}
            onChange={this.handleInput('password')}
            />
          </label>

          <button onClick={this.handleSubmit}>Sign Up</button>
          
        </form>
      </div>
    );
  }
}

export default SignUp;