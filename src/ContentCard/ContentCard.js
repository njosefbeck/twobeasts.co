import React, { Component } from 'react';

import AboutContentCard from '../AboutContentCard/AboutContentCard.js';
import ServicesContentCard from '../ServicesContentCard/ServicesContentCard.js';
import PortfolioContentCard from '../PortfolioContentCard/PortfolioContentCard.js';
import ContactContentCard from '../ContactContentCard/ContactContentCard.js';

import './ContentCard.css';

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
        {this.renderContentCard(this.props.component)}
      </div>
    )
  }
}

export default ContentCard;