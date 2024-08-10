import React from 'react'
import Socials from "./Socials"
import "./Footer.css"
import "./Navbar.css"
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div>
      <ul className="footer container">
        <li><a href = "#">Privacy policy</a></li>
        <li><a href = "#">Refund policy</a></li>
        <li><a href = "#">Website policy</a></li>
        <li><Link to="contact" smooth={true} duration={1000}>Contact us</Link></li>
        <li><Link to="products" smooth={true} duration={1000}>Products</Link></li>
        <li><a href = "#">Career</a></li>
        <li><Link to="rentals" smooth={true} duration={1000}>Rentals</Link></li>
        <li><Socials/></li>
      </ul>
    </div>
  )
}

export default Footer
