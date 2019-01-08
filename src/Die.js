import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return (
      <span className="Die">
        <i class={`fas fa-dice-${this.props.num} fa-10x`} />
      </span>
    );
  }
}

export default Die;
