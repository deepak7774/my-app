import React from "react";
import bridalSets from "../../images/bridalSets.png";
import bridalSets_2  from "../../images/bridalSets_2.png"
import { Link } from "react-router-dom";
export const BridalSets = () => {
  return (
    <>
      <div className="bridalSets-necklaces flex">
        <div className="bridalSets flex">
        <div className="bridalSets-text">
            <h3>Bridal Sets</h3>
            <p>Lorem Ipsum is typesetting industry.</p>
            <div className="bridalSets-btn">
              <Link className="button" to="#">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="bridalSets-img">
            <img src={bridalSets} alt="" />
          </div>
        </div>
        <div className="bridalSets-2">
          <div className="bridalSets-img">
            <img src={bridalSets_2} alt="" />
          </div>
          <div className="bridalSets-text">
            <h3>Bridal Sets</h3>
            <p>Lorem Ipsum is typesetting industry.</p>
            <div className="bridalSets-btn">
              <Link className="button" to="#">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
