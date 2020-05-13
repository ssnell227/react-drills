import React, { Component } from 'react';
import Img from './components/img'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
    }
  }
  render() {
    return (
     <div>
       <Img img={this.state.img}/>
     </div>
    );
  }
}

export default App;
