import React from 'react'
import "./Socials.css"
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Socials() {
  return (
    <div className="social-container">
      <a href="#" target="_blank" rel="noopener noreferrer" className="social">
        <FaInstagram />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="social">
        <FaLinkedin />
      </a>
    </div>
  )
}

export default Socials
