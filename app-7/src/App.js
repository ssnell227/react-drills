import React, { Component } from 'react';
import Todo from './components/list'
import NewTask from './components/new-task'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      todo: []
    }
  }
  updateInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  

  addItem = () => {
    let { input, todo } = this.state

    let newArray = [...todo, input]

    this.setState({
      input: '',
      todo: newArray
    })
  }

  render() {
    return (
      <div>
        <h1>To-do list</h1>
        <NewTask value={this.state.input} updateInput={this.updateInput} addItem={this.addItem.bind(this)}/>
        <Todo todo={this.state.todo} />
      </div>
    );
  }
}

export default App;

