import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import './NavItem.css'

import Shape from '../Shape/Shape.js';

class NavItem extends Component {
  render() {
    return (
      <div className={this.props.classes.join(' ')}>
        <NavLink to={this.props.link}>
          <Shape
            shapePath={this.props.shapePath}
          />
          <span className="page">{this.props.page}</span>
        </NavLink>
      </div>
    )
  }
}

export default NavItem;