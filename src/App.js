import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RollDice from './RollDice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice />
      </div>
    );
  }
}

export default App;
