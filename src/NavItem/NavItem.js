import React, { Component } from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';

import './NavItem.css'

import Shape from '../Shape/Shape.js';

class NavItem extends Component {

  state = {
    redirect: false
  };

  componentDidMount() {
    const isSectionOpen = this.props.isSectionOpen;
    const navItemPosition = this.props.navItemPosition;
    const newClasses = [];

    if (isSectionOpen) {
      newClasses.push('section-open');
    }
    
  };

  handleRouting = () => {
    this.props.handleNavItemClick(this.props.id);
  };

  render() {

    if (this.props.redirect) {
      return (
        <Redirect to={this.props.link} />
      )
    } else {
      return (
        <div className={this.props.classes.join(' ')} onClick={this.handleRouting}>
            <Shape
              shapePath={this.props.shapePath}
            />
            <span className="page">{this.props.page}</span>
        </div>
      )
    }
  }
}

export default NavItem;