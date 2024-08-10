import React from 'react'
import "./Seo3Lite.css"
import { Element } from 'react-scroll'

const Seo3Lite = () => {
    return (
        <Element name = "seo3lite">
        <div className='table-with-button'>
            <div className='tableContainer'>

                <div className="row" id="header">
                    <div>Specification</div>
                    <div>Rhyno SEO3 Lite</div>
                </div>

                <div className="row">
                    <div>Battery</div>
                    <div>1.8 Kwh</div>
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
                    <div>3 hours (12A)</div>
                </div>

                <div className="row">
                    <div>Motor</div>
                    <div>1500W</div>
                </div>

                <div className="row">
                    <div>Max speed</div>
                    <div>55 km/h</div>
                </div>

                <div className="row">
                    <div>Warranty on electronics</div>
                    <div>1 Year</div>
                </div>

                <div className="row">
                    <div>Max range (@30km/h)</div>
                    <div>100 km</div>
                </div>

                <div className="row">
                    <div>Max range (@45km/h)</div>
                    <div>90 km</div>
                </div>

                <div className="row">
                    <div>Max range (@full speed)</div>
                    <div>60 km</div>
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
            <div className="btn">Buy now</div>
        </div>
        </Element>
    )
}

export default Seo3Lite
