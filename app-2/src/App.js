import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array: ['breakfast', 'lunch', 'dinner']
    }
  }
  render() {
    return (
      <div>
        {this.state.array.map(item => {
          return <h2>{item}</h2>
        })}
      </div>
    );
  }
}

export default App;
