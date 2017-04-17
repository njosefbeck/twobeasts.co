import React, { Component } from 'react';

import './Nav.css';

import NavItem from '../NavItem/NavItem.js';

class Nav extends Component {
  render() {
    return (
      <nav className="siteNav">
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
      </nav>
    );
  }
}

export default Nav;