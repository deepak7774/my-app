import React from "react";
import shipRings from "../../images/shipRings.png";
import { Link } from "react-router-dom";

export const MostLoved = () => {
  return (
    <>
      <div className="MostLoved">
        <div className="container">
          <h2>Most Loved Engagement Rings</h2>
          <div className="flex">
            <div class="column-width">
              <Link to="#">
                <div className="MostLoved-img">
                  <img src={shipRings} alt="" />
                </div>
                <p>Ready To Ship Rings</p>
              </Link>
            </div>

            <div class="column-width">
              <Link to="#">
                <div className="MostLoved-img">
                  <img src={shipRings} alt="" />
                </div>
                <p>Ready To Ship Rings</p>
              </Link>
            </div>
            <div class="column-width">
              <Link to="#">
                <div className="MostLoved-img">
                  <img src={shipRings} alt="" />
                </div>
                <p>Ready To Ship Rings</p>
              </Link>
            </div>
            <div class="column-width">
              <Link to="#">
                <div className="MostLoved-img">
                  <img src={shipRings} alt="" />
                </div>
                <p>Ready To Ship Rings</p>
              </Link>
            </div>
            <div class="column-width">
              <Link to="#">
                <div className="MostLoved-img">
                  <img src={shipRings} alt="" />
                </div>
                <p>Ready To Ship Rings</p>
              </Link>
            </div>
          </div>

          <div className="MostLoved-btn">
            <Link className="button" to="/">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
