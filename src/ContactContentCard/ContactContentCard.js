import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.css';

import './ContactContentCard.css';

class ContactContentCard extends Component {
  render() {
    return (
      <section className="content-card contact-card">
        <h2 className="content-header">Contact</h2>

        <ul className="top-social-nav">
          <li>
            <a href="https://www.facebook.com/hellotwobeasts" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hellotwobeasts" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/hellotwobeasts" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <p>For general inquiries, please use the form below. If you're interested in discussing a potential project with us, please use <a href="https://goo.gl/forms/vS4u8mmSXmkx2RB03" target="_blank">this form</a> instead.
        </p>

        <form action="https://formspree.io/hellotwobeasts@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="_replyto" placeholder="Email" required />
          <input type="text" name="website" placeholder="Website" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <textarea name="message" defaultValue="Type your message here" required></textarea>
          <input type="submit" value="Send" /> 
          <input type="hidden" name="_next" value="/thanks.html" />
          <input type="hidden" name="_subject" value="New submission!" />
        </form>

        <ul className="bottom-social-nav">
          <li>
            <a href="https://www.facebook.com/hellotwobeasts" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hellotwobeasts" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/hellotwobeasts" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </section>
    )
  }
}

export default ContactContentCard;