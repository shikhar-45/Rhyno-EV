import React from 'react'
import { rentalText } from '../constants/const_text'
import Apple from './Apple'
import { Element } from 'react-scroll'

const Rentals = () => {
  return (
    <section>
      <Element name = "rentals">
      <h1>Rentals</h1>
      <div className="section-text">{rentalText}</div>
      <div className="section-text">Download our rental app :<Apple/></div>
      </Element>
    </section>
  )
}

export default Rentals
