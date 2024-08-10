import React from 'react'
import "./Compare.css"
import { Element } from 'react-scroll'

const Compare = () => {
  return (
    <section>
      <Element name = "compare">
      <h1>Compare all</h1>
    <div className='table-container'>

      <div className = "row-container" id = "header">
        <div>Specification</div>
        <div>Rhyno SEO3 Lite</div>
        <div>Rhyno SEO3</div>
        <div>Rhyno SEO3 Max</div>
      </div>

      <div className = "row-container">
        <div>Battery</div>
        <div>1.8 Kwh</div>
        <div>2.7 Kwh</div>
        <div>2.7 Kwh</div>
      </div>

      <div className = "row-container">
        <div>Battery features</div>

        <div>
          <ul className='list-container'>
            <li>LFP with 1500 cycles</li>
            <li>Active Balancing</li>
            <li>Waterproof (IP67)</li>
          </ul>
        </div>

        <div>
          <ul className='list-container'>
            <li>LFP with 1500 cycles</li>
            <li>Active Balancing</li>
            <li>Waterproof (IP67)</li>
          </ul>
        </div>

        <div>
          <ul className='list-container'>
            <li>LFP with 1500 cycles</li>
            <li>Active Balancing</li>
            <li>Waterproof (IP67)</li>
          </ul>
        </div>

      </div>

      <div className = "row-container">
        <div>Battery warranty</div>
        <div>3 Years</div>
        <div>3 Years</div>
        <div>3 Years</div>
      </div>

      <div className = "row-container">
        <div>Charging time</div>
        <div>3 hours (12A)</div>
        <div>4 hours (12A)</div>
        <div>4 hours (12A)</div>
      </div>

      <div className = "row-container">
        <div>Motor</div>
        <div>1500W</div>
        <div>1500W</div>
        <div>2000W</div>
      </div>

      <div className = "row-container">
        <div>Max speed</div>
        <div>55 km/h</div>
        <div>55 km/h</div>
        <div>65 km/h</div>
      </div>

      <div className = "row-container">
        <div>Warranty on electronics</div>
        <div>1 Year</div>
        <div>1 Year</div>
        <div>1 Year</div>
      </div>

      <div className = "row-container">
        <div>Max range (@30km/h)</div>
        <div>100 km</div>
        <div>150 km</div>
        <div>120 km</div>
      </div>

      <div className = "row-container">
        <div>Max range (@45km/h)</div>
        <div>90 km</div>
        <div>110 km</div>
        <div>100 km</div>
      </div>

      <div className = "row-container">
        <div>Max range (@full speed)</div>
        <div>60 km</div>
        <div>90 km</div>
        <div>80 km</div>
      </div>

      <div className = "row-container">
        <div>Other key benefits</div>

        <div>
          <ul className='list-container'>
            <li>Fire-safe battery</li>
            <li>Range prediction</li>
            <li>Comfortable ride</li>
            <li>Stable and safe</li>
          </ul>
        </div>

        <div>
          <ul className='list-container'>
            <li>Fire-safe battery</li>
            <li>Range prediction</li>
            <li>Comfortable ride</li>
            <li>Stable and safe</li>
          </ul>
        </div>

        <div>
          <ul className='list-container'>
            <li>Fire-safe battery</li>
            <li>Range prediction</li>
            <li>Comfortable ride</li>
            <li>Stable and safe</li>
          </ul>
        </div>

      </div>

    </div>
    </Element>
    </section>
  )
}

export default Compare
