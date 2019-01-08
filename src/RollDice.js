import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d1: 'one',
      d2: 'two'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  roll() {
    const stateArr = ['one', 'two', 'three', 'four', 'five', 'six'];
    const randOne = stateArr[Math.floor(Math.random() * 6)];
    const randTwo = stateArr[Math.floor(Math.random() * 6)];
    this.setState({ d1: randOne, d2: randTwo });
  }

  handleClick(evt) {
    this.roll();
  }

  render() {
    return (
      <div>
        <div className="RollDice">
          <Die num={this.state.d1} />
          <Die num={this.state.d2} />
        </div>
        <div>
          <button onClick={this.handleClick}>Roll Dice</button>
        </div>
      </div>
    );
  }
}

export default RollDice;
