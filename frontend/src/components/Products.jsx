import React from 'react'
import ProdColor from './ProdColor'
import Seo3Lite from './Seo3Lite'
import Seo3 from "./Seo3"
import Seo3Max from "./Seo3Max"
import { seo3LiteText, seo3Text, seo3MaxText } from '../constants/const_text'
import './Products.css'
import { Element } from 'react-scroll'

const Products = () => {
  return (
    <section>
      <Element name = "products">
      <h1>Products</h1>
      <div className='body-container seo3-lite'>
        <div className='info'>
          <h1>SEO3 Lite</h1>
          <ProdColor />
          <div className="section-text">{seo3LiteText}</div>
        </div>
        <Seo3Lite />
      </div>

      <div className='body-container'>
        <div className='info'>
          <h1>SEO3</h1>
          <ProdColor />
          <div className="section-text">{seo3Text}</div>
        </div>
        <Seo3 />
      </div>

      <div className='body-container'>
        <div className='info'>
          <h1>SEO3 Max</h1>
          <ProdColor />
          <div className="section-text">{seo3MaxText}</div>
        </div>
        <Seo3Max />
      </div>
      </Element>
    </section>
  )
}

export default Products
