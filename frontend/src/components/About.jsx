import React from 'react'
import { aboutText } from '../constants/const_text'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <section>
      <Element name="about">
      <h1>About us</h1>
      <div className="section-text">{aboutText}</div>
      </Element>
    </section>
  )
}

export default About
