import React, { Component } from 'react';
import './App.css';
import Todo from './components/trello/Todo'
import Doing from './components/trello/Doing'
import Done from './components/trello/Done'

class App extends Component {
  render() {
    return (
      <div>
      <p>Hi, Good Morning</p>
      <Todo />
      <Doing />
      <Done />
      </div>
    );
  }
}

export default App;
