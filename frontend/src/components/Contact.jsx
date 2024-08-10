import React from 'react'
import { mobileNo, locationText } from '../constants/const_text'
import "./Contact.css"
import { Element } from 'react-scroll'
function Contact() {
  return (
    <section>
      <Element name = "contact">
      <h1>Contact Us</h1>
      <div className="section-text">
        <div><span>Mail:</span>
          <a className="mail-link span-right" href="#">info@rhyno.in</a></div>
        <div>
          <span>Mobile no.:</span>
          <span className='span-right'>{mobileNo}</span>
        </div>
        <div>
          <span>Location:</span>
          <span className='span-right'>{locationText}</span>
        </div>
      </div>
      </Element>
    </section>
  )
}

export default Contact
