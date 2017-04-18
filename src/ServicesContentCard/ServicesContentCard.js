import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class ServicesContentCard extends Component {
  render() {
    return (
      <section className="content-card">
        <h2 className="content-header">Services</h2>

        <p>We offer a range of web design and development services to suit your needs. You can mix and match our services to create a web experience that accomplishes your goals.</p>

        <ul className="content-list">
          <li>Website and web app design or re-design</li>
          <li> Website and web app development 
            <ul className="content-list-child">
              <li>Static site (personal or business website, portfolio, etc.)</li>
              <li>Online store</li>
              <li>Custom WordPress theme</li>
            </ul>
          </li>
          <li> Website/web app maintenance
            <ul className="content-list-child">
              <li>Content updates</li>
              <li>Bug fixes</li>
            </ul>
          </li> 
        </ul>

        <p>We will work with you throughout the design and development process. <Link to='/contact'>Contact us</Link> to tell us about your project.</p>

      </section>
    )
  }
}

export default ServicesContentCard;