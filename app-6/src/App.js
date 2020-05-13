import React, { Component } from 'react';
import Todo from './components/Todo'
import './App.css'

class App extends Component {
  constructor (props) {
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
    let {input, todo} = this.state

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
       <input value={this.state.input} onChange={this.updateInput} placeholder='Enter new task' ></input>
       <button onClick={this.addItem}>Submit</button>
       <Todo todo={this.state.todo}/>
     </div>
    );
  }
}

export default App;
