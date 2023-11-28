import React from "react";
import { Link } from "react-router-dom";
import eternityRings from "../../images/eternityRings.png";

export const EternityRings = () => {
  return (
    <>
      <div className="eternityRings">
        <div className="container ">
          <div className="flex eternityRings-main">
            <div className="eternityRings-text">
              <h2>Eternity Rings</h2>
              <p>Lorem Ipsum is printing and typesetting industry.</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div>
                <Link className="button" to="#">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="eternityRings-img">
              <img src={eternityRings} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
