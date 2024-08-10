import React, { useState } from 'react'
import { red_side, blue_side, black_side } from '../assets'
import "./ProdColor.css"

const colors = {
    red: red_side,
    blue: blue_side,
    black: black_side,
}

const Card = () => {
    const [activeColor, setActiveColor] = useState('red');
    const handleDotClick = (color) => {
        setActiveColor(color == activeColor ? null : color);
    }

    return (
        <div className="card">
            <div className="dots-container">
                {Object.keys(colors).map(color => (
                    <div key={color} className='single-dot-container'>
                        <div className={`dot ${activeColor === color ? 'active' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleDotClick(color)}
                        />
                        {activeColor == color && (
                            <div className="color-name">
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {activeColor && (
                <img src={colors[activeColor]} alt={activeColor} className='color-image'></img>
            )}
        </div>
    )
}

const ProdColor = () => {
    return (
        <div className='card-container'>
            <Card />
        </div>
    )
}

export default ProdColor
