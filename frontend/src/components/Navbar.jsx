import React, { useState } from 'react'
import { rhyno_logo } from "../assets"
import "./Navbar.css"
import Socials from "./Socials"
import {Link} from 'react-scroll'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav>
                <img src={rhyno_logo} alt="logo"></img>
                <ul className="container">
                    <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={1000}>About us</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000}>Contact us</Link></li>
                    <li className="item_with_menu"><a href="#" onClick={toggleMenu}>Products</a>
                        {isMenuOpen && (
                            <ul className="submenu">
                                <li><Link to="seo3lite" smooth={true} duration={1000}>SEO3 Lite</Link></li>
                                <li><Link to="seo3" smooth={true} duration={1000}>SEO3</Link></li>
                                <li><Link to="seo3max" smooth={true} duration={1000}>SEO3 Max</Link></li>
                                <li><Link to="compare" smooth={true} duration={1000}>Compare all</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="prebook" smooth={true} duration={500}>Pre-book now</Link></li>
                </ul>
                <Socials/>
            </nav>
        </div>
    )
}

export default Navbar
