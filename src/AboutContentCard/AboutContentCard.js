import React, { Component } from 'react';

import twoBeastsPhoto from './twobeastsfinal_800x800web.jpg';

class AboutContentCard extends Component {
  render() {
    return (
      <section className="content-card">
        <h2 className="content-header">About</h2>

        <img className="content-image" src={twoBeastsPhoto} alt="Janna & Nathan: Two Beasts Creative Duo" />

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

export default AboutContentCard;