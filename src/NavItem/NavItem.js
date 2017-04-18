import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import './NavItem.css'

import Shape from '../Shape/Shape.js';

class NavItem extends Component {

  renderCSSClasses = () => {
    const isSectionOpen = this.props.isSectionOpen;
    const navItemPosition = this.props.navItemPosition;
    let classes = 'navItem';

    if (isSectionOpen) {
      classes+= ' section-open';
    }

    if (navItemPosition) {
      classes+= ` navItem--${navItemPosition}`;
    }

    return classes;
  };

  render() {
    return (
      <div className={this.renderCSSClasses()}>
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