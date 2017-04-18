import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import './NavItem.css'

import Shape from '../Shape/Shape.js';

class NavItem extends Component {
  render() {
    return (
      <div className={this.props.isSectionOpen ? 'navItem section-open' : 'navItem'}>
          <Link to={this.props.link}>
            <Shape
              shapePath={this.props.shapePath}
            />
            <span className="page">{this.props.page}</span>
          </Link>
      </div>
    )
  }
}

export default NavItem;