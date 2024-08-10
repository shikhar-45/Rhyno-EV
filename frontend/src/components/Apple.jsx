import React from 'react'
import "./Apple.css"
import { FaAndroid, FaApple } from 'react-icons/fa';

function Apple() {
  return (
    <div className="new-container">
      <a href="#" target="_blank" rel="noopener noreferrer" className="new-social">
        <FaAndroid />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="new-social">
        <FaApple />
      </a>
    </div>
  )
}

export default Apple
