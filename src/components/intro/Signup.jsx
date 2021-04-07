import React from 'react';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const key = event.target.id;
    const val = event.target.value;
    this.setState({ [key]: val});
  }

  render() {
    return (
      <label>
        Signup
        <form onSubmit={this.handleSubmit}>
          <input id='email' type='email' pattern='[^@\s]+@[^@\s]+' title='Invalid email address' onChange ={this.handleChange} placeholder='example@email.com' />
          <input id='first' type='text' placeholder='First Name' onChange ={this.handleChange} />
          <input id='last' type='text' placeholder="Last Name" onChange ={this.handleChange} />
          <input id='password' type='password' onChange={this.handleChange} placeholder='Enter Password' />
          <button type="submit">Sign Up</button>
        </form>
      </label>
    );
  }
}

export default Signup;