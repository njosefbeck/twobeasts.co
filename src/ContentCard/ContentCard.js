import React, { Component } from 'react';

import SiteHeader from '../SiteHeader/SiteHeader.js';
import NavItem from '../NavItem/NavItem.js';

import './ContentCard.css';

class AboutContentCard extends Component {
  render() {
    return (
      <section className="content-card">
        <h2 className="content-header">About</h2>

        <p>Two Beasts is a creative duo, Nathan Beck and Janna Añonuevo Langholz, who specialize in web design and development.</p>

        <h3>What does it mean to be a beast?</h3>

        <p>Beasts are often misunderstood as being brutish, cruel, mean, etc. At least, that's what all of the formal definitions of beast tell us. But, we would disagree. Sure there are beasts that fit that definition, but for every cruel, small-minded beast there are many more pleasant, caring beasts and those beasts deserve recognition too. Let's stop labelling all beasts as bad, and start understanding the true story of the beasts of our world.</p>

        <h3>Problem Worth Solving</h3>

        <p>Small businesses and creatives often don't have the funds to afford larger web design/development firms. They then are forced to go with a cookie-cutter website builder. This ultimately stifles their creativity and dampens their voice.</p>

        <h3>Our Solution</h3>

        <p>Small businesses, not-for-profits and creatives shouldn't have to spend an exorbitant amount of money for a high-quality website. Our goal is to create an online space for our clients that fully honors and amplifies their voices without having them break the bank. In short, we build high-quality web experiences at a price point that is affordable for groups without a lot of initial capital.</p>
      </section>
    )
  }
}

class ServicesContentCard extends Component {
  render() {
    return (
      <section className="content-card">
        <h2 className="content-header">Services</h2>
      </section>
    )
  }
}

class PortfolioContentCard extends Component {
  render() {
    return (
      <section className="content-card">
        <h2 className="content-header">Portfolio</h2>
      </section>
    )
  }
}

class ContactContentCard extends Component {
  render() {
    return (
      <section className="content-card">
        <h2 className="content-header">Contact</h2>
      </section>
    )
  }
}

class ContentCard extends Component {

  componentDidMount() {
    this.props.isContentCardOpen(true);
  }

  componentWillUnmount() {
    this.props.isContentCardOpen(false);
  }

  renderContentCard(componentName) {
    if (componentName === 'About') return <AboutContentCard />;
    if (componentName === 'Services') return <ServicesContentCard />;
    if (componentName === 'Portfolio') return <PortfolioContentCard />;
    if (componentName === 'Contact') return <ContactContentCard />;
  }

  render() {
    return (
      <div className="content-card-container">
        <SiteHeader
          isSection={true}
        />
        {this.renderContentCard(this.props.component)}
        <NavItem
          key='link-{this.props.component}'
          id='link-{this.props.component}'
          page='Home'
          link='/'
          isSectionOpen={true}
          shapePath={this.props.componentShapePath}
        />
      </div>
    )
  }
}

export default ContentCard;