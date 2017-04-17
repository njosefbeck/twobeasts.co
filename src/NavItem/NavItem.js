import React, { Component } from 'react';

import './NavItem.css'

import Shape from '../Shape/Shape.js';

class NavItem extends Component {
  render() {
    return (
      <div className="navItem">
        <Shape />
        <a href="#">Link</a>
      </div>
    )
  }
}

export default NavItem;