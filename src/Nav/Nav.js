import React, { Component } from 'react';

import './Nav.css';

import NavItem from '../NavItem/NavItem.js';

class Nav extends Component {

  state = {
    navItems: [
      {
        key: 'link-About',
        id: 'link-About',
        page: 'About',
        link: '/about',
        shapePath: 'M299.6 149.8L151 298.6 2.5 149.8 151 1.3 299.6 149.8z',
        animateDirection: 'left',
        classes: ['navItem'],
        redirect: false
      },
      {
        key: 'link-Services',
        id: 'link-Services',
        page: 'Services',
        link: '/services',
        shapePath: 'M282.5,224v1.2l-2.2,1.2l-1.6-0.4l-100.1-31.9l-22,102.4c-0.5,1.1-0.9,1.7-1.2,2c-0.3,0.3-0.7,0.4-1.4,0.4c-0.5-0.1-1-0.4-1.4-0.8s-0.7-0.9-0.8-1.4l-22.4-102.7L29,226l-1.6,0.4l-2-1.2V224l1.2-2l77.8-70.8L26.6,80.6l-1.2-2v-1.2l2-1.2l1.6,0.4l100.3,31.7L151.1,6c0.4-0.8,0.8-1.4,1.3-1.9c0.5-0.5,0.8-0.7,1.1-0.7c0.7,0.3,1.2,0.6,1.6,1s0.7,0.9,1,1.4l22.4,102.4l100.1-31.7l1.6-0.4l2.2,1.2v1.2l-1.4,2l-77.8,70.6l77.8,70.8L282.5,224z',
        animateDirection: 'top',
        classes: ['navItem'],
        redirect: false
      },
      {
        key: 'link-Portfolio',
        id: 'link-Portfolio',
        page: 'Portfolio',
        link: '/portfolio',
        shapePath: 'M289.1,155.3c-23,9.5-41.3,18.1-54.9,25.7c-13.6,7.6-24.3,15.2-31.9,22.7c-7.5,7.5-15,18-22.7,31.6c-7.6,13.6-16.3,32.2-26.1,55.8h-7.8c-9.9-23.6-18.7-42.2-26.3-55.8c-7.6-13.6-15.1-24.1-22.5-31.6c-7.6-7.5-18.3-15-31.9-22.7c-13.6-7.6-32-16.2-55.1-25.7v-7.8c23.2-9.5,41.7-18.1,55.3-25.7c13.6-7.6,24.2-15.2,31.7-22.7c7.4-7.5,14.9-18,22.5-31.6c7.6-13.6,16.4-32.2,26.3-55.8h7.8c9.8,23.6,18.5,42.2,26.1,55.8c7.6,13.6,15.2,24.1,22.7,31.6c7.4,7.5,17.9,15,31.5,22.7c13.6,7.6,32.1,16.2,55.3,25.7V155.3z',
        animateDirection: 'bottom',
        classes: ['navItem'],
        redirect: false
      },
      {
        key: 'link-Contact',
        id: 'link-Contact',
        page: 'Contact',
        link: '/contact',
        shapePath: 'M285.9,206.7l-0.4,1.5l-1.9,0.4l-1.9-0.4l-91.6-16.6l17,93.7l-1.2,2.3h-0.8c-0.8-0.3-1.4-0.6-1.9-1c-0.5-0.4-1-0.8-1.3-1.4L149,208.6l-53,76.8c-0.3,0.4-0.7,0.8-1.3,1.3c-0.6,0.5-1.2,0.8-1.8,1.1l-1.5-0.4l-0.4-1.9l17-93.7l-93.7,17l-2.3-1.2v-0.6c0.3-0.8,0.6-1.4,1.1-2c0.4-0.6,0.9-1,1.3-1.3l76.8-53L14.2,97.7c-0.5-0.4-1-0.8-1.4-1.4c-0.4-0.5-0.7-1.1-1-1.7l0.4-1.4l1.9-0.8l93.7,17L91.3,17.8l-0.4-1.9l1.2-2.3h0.8c0.5,0.3,1,0.5,1.4,0.9c0.4,0.3,1,0.8,1.6,1.4l53,76.6l52.8-76.6c0.5-0.8,1-1.3,1.4-1.6c0.4-0.3,1.1-0.5,1.8-0.7l1.2,0.4l0.8,1.9l-0.4,1.9l-16.6,91.6l91.6-16.6l1.9-0.4l2.3,1.2v1c-0.1,0.5-0.4,1.1-0.9,1.6c-0.5,0.6-0.9,1.1-1.4,1.4l-76.6,52.8l76.6,53c0.6,0.6,1.1,1.2,1.4,1.6C285.4,205.7,285.7,206.1,285.9,206.7z',
        animateDirection: 'right',
        classes: ['navItem'],
        redirect: false
      }
    ]
  };

  handleNavItemClick = (navItemId) => {
    console.log(navItemId);
    this.addAnimationClasses(navItemId);
  };

  addAnimationClasses = (navItemId) => {
    this.setState({
      navItems: this.state.navItems.map((navItem) => {
        let newNavItem = Object.assign({}, navItem, {
          classes: navItem.classes.concat(`fly-out-${navItem.animateDirection}`)
        });

        return newNavItem;
      })
    });

    setTimeout(this.redirectToNewComponent.bind(null, navItemId), 1000);
  };

  redirectToNewComponent = (navItemId) => {
    console.log('Redirected ' + navItemId);
    this.setState({
      navItems: this.state.navItems.map((navItem) => {
        if (navItemId === navItem.id) {
          return Object.assign({}, navItem, {
            redirect: true
          });
        }

        return navItem;
      })
    });
  };

  render() {
    const navItems = this.state.navItems.map((navItem) => (
      <NavItem
        key={navItem.key}
        id={navItem.id}
        page={navItem.page}
        link={navItem.link}
        shapePath={navItem.shapePath}
        animateDirection={navItem.animateDirection}
        classes={navItem.classes}
        handleNavItemClick={this.handleNavItemClick}
        redirect={navItem.redirect}
      />
    ));
    return (
      <nav className="siteNav">
          {navItems}
      </nav>
    );
  }
}

export default Nav;