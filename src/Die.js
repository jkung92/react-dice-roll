import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     num: 'one'
  //   };
  // }

  render() {
    return (
      <span className="Die">
        <i class={`fas fa-dice-${this.props.num} fa-10x`} />
      </span>
    );
  }
}

export default Die;
