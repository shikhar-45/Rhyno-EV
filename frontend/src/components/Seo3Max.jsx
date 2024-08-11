import React from 'react'
import "./Seo3Lite.css"
import { Element,Link } from 'react-scroll'

const Seo3Max = () => {
  return (
    <Element name = "seo3max">
    <div className='table-with-button'>
      <div className='tableContainer'>

        <div className="row" id="header">
          <div>Specification</div>
          <div>Rhyno SEO3 Max</div>
        </div>

        <div className="row">
          <div>Battery</div>
          <div>2.7 Kwh</div>
        </div>

        <div className="row">
          <div>Battery features</div>

          <div>
            <ul className='list'>
              <li>LFP with 1500 cycles</li>
              <li>Active Balancing</li>
              <li>Waterproof (IP67)</li>
            </ul>
          </div>

        </div>

        <div className="row">
          <div>Battery warranty</div>
          <div>3 Years</div>
        </div>

        <div className="row">
          <div>Charging time</div>
          <div>4 hours (12A)</div>
        </div>

        <div className="row">
          <div>Motor</div>
          <div>2000W</div>
        </div>

        <div className="row">
          <div>Max speed</div>
          <div>65 km/h</div>
        </div>

        <div className="row">
          <div>Warranty on electronics</div>
          <div>1 Year</div>
        </div>

        <div className="row">
          <div>Max range (@30km/h)</div>
          <div>120 km</div>
        </div>

        <div className="row">
          <div>Max range (@45km/h)</div>
          <div>100 km</div>
        </div>

        <div className="row">
          <div>Max range (@full speed)</div>
          <div>80 km</div>
        </div>

        <div className="row">
          <div>Other key benefits</div>

          <div>
            <ul className='list'>
              <li>Fire-safe battery</li>
              <li>Range prediction</li>
              <li>Comfortable ride</li>
              <li>Stable and safe</li>
            </ul>
          </div>

        </div>

      </div>
      <button className="btn"><Link to="preBookForm" smooth={true} duration={1000}>Buy now</Link></button>
    </div>
    </Element>
  )
}

export default Seo3Max
