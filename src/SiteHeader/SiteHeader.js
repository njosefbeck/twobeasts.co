import React, { Component } from 'react';

import './SiteHeader.css';

import Logo from '../Logo/Logo.js';
import Nav from '../Nav/Nav.js';

class SiteHeader extends Component {
  render() {
    console.log();
    return (
      <header className={this.props.isSection ? 'site-header section-open' : 'site-header'}>
        <Logo />
        <Nav />
      </header>
    );
  }
}

export default SiteHeader;