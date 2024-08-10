import React, { useState, useEffect } from 'react'
import { homeFrontLine } from '../constants/const_text'
import "./Home.css"
import { group, black_side, blue_side, red_side } from '../assets'
import SlidingCarousel from './SlidingCarousel'
import { Element } from 'react-scroll'

const Home = () => {
  const texts = ["Elegance", "Minimalism", "Comfort"];
  const [currentText, setcurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setcurrentText(texts[index]);
  }, [index]);

  return (
    <section>
      <Element name = "home">
      <h1 className='frontline'>{homeFrontLine}
        <span className='changingText frontline'>{currentText}</span>
      </h1>

      <img src={group} alt="vehicles" className='vehicles'></img>

      <div className='image-container'>
        <div className='prod'>
          <img src={blue_side} alt="SEO3 Lite" className='vehicle-type' />
          <h1>SEO3 Lite</h1>
          <button className='btn'>Check Out</button>
        </div>

        <div className='prod'>
          <img src={black_side} alt="SEO3" className='vehicle-type' id='seo3' />
          <h1>SEO3</h1>
          <button className='btn'>Check Out</button>
        </div>

        <div className='prod'>
          <img src={red_side} alt="SEO3 Max" className='vehicle-type' />
          <h1>SEO3 Max</h1>
          <button className='btn'>Check Out</button>
        </div>
      </div>
      <button id='preBook'>Pre-Book Now</button>

      <SlidingCarousel/>
      </Element>
    </section>
  )
}

export default Home
