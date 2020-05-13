import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      array: ['breakfast', 'lunch', 'dinner']
    }
  }

  changeState =(e)=> {
    this.setState({
      input: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <input onChange={this.changeState}></input>
        <div>
          {this.state.array.filter(item => item.includes(this.state.input)).map(item => {
            return <h2>{item}</h2>
          })}
        </div>
      </div>
    );
  }
}

export default App;
