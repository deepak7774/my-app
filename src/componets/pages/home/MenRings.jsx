import React from 'react'
import menRings from "../../images/menRings.png"
import { Link } from 'react-router-dom'

export const MenRings = () => {
  return (
    <>
     <div className="menRings">
        <div className=" container">
          <div className='flex menRings-main'>
          <div className="menRings-text">
            <h2>Men’s Rings</h2>
            <p>Lorem Ipsum is printing and typesetting industry.</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div>
              <Link className="button" to="/">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="menRings-img">
            <img src={menRings} alt="" />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
