import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { carouselContent } from '../constants/const_text'
import './SlidingCarousel.css'

const SlidingCarousel = () => {
    const settings = {
        dots : true,
        infinite : true,
        speed : 400,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 3000,
    };

  return (
    <Slider {...settings}>
        {carouselContent.map(slide => (
            <div key = {slide.id}>
                <h1 className='slide-heading' style={{margin: "3rem 1rem"}}>{slide.heading}</h1>
                <p className='section-text' style={{color : "#FFFFFF"}}>{slide.body}</p>
            </div>
        ))}
    </Slider>
  )
}

export default SlidingCarousel
