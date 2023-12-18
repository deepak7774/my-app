import React from "react";
import engagementRing from "../../images/EngagementRing.png";
import { Link } from "react-router-dom";

export const ShopCategory = () => {
  return (
    <>
      <div className="ShopCategory">
        <div className="container">
          <h2>Shop by category</h2>
          <div className="flex">
            <div class="column-width">
              <Link to="#">
                <div className="ShopCategory-img">
                  <img src={engagementRing} alt="" />
                </div>
                <h4>Ready To Ship Rings</h4>
              </Link>
            </div>

            <div class="column-width">
              <Link to="#">
                <div className="ShopCategory-img">
                  <img src={engagementRing} alt="" />
                </div>
                <h4>Ready To Ship Rings</h4>
              </Link>
            </div>

            <div class="column-width">
              <Link to="#">
                <div className="ShopCategory-img">
                  <img src={engagementRing} alt="" />
                </div>
                <h4>Ready To Ship Rings</h4>
              </Link>
            </div>

            <div class="column-width">
              <Link to="#">
                <div className="ShopCategory-img">
                  <img src={engagementRing} alt="" />
                </div>
                <h4>Ready To Ship Rings</h4>
              </Link>
            </div>

            <div class="column-width">
              <Link to="#">
                <div className="ShopCategory-img">
                  <img src={engagementRing} alt="" />
                </div>
                <h4>Ready To Ship Rings</h4>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
