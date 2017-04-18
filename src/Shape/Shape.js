import React, { Component } from 'react';

import './Shape.css';

class Shape extends Component {
  render() {
    return (
      <svg className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <path d={this.props.shapePath} />
      </svg>
    );
  }
}

export default Shape;