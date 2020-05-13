import React, { Component } from 'react';

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
        user: null,
        password: null,
    }
  }

  updateInfo = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  alert = () => {
    window.alert(`Username: ${this.state.user} Password: ${this.state.password}`)
  }

  render() {
    return (
     <div>
         <input onChange={this.updateInfo} placeholder='Username' name='user'></input>
         <input onChange={this.updateInfo} placeholder='Password' name='password'></input>
         <button onClick={this.alert}>login</button>
     </div>
    );
  }
}

