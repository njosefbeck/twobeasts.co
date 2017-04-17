import React, { Component } from 'react';

import './Shape.css';

class Shape extends Component {
  render() {
    return (
      <svg className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <path className="diamond" d="M299.6 149.8L151 298.6 2.5 149.8 151 1.3 299.6 149.8z"/>
      </svg>
    );
  }
}

export default Shape;