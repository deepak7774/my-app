import React, { useState } from "react";
import MoreFilters from "./MoreFilters";
import ShopByStyle from "./ShopByStyle";
import { MainPage } from "../mainPageTabe/ringPageTable/MainPage";
import { Link } from "react-router-dom";

export const ChooseSetting = () => {
  const [myActive, setMyActive] = useState("ShopByStyle");
  console.warn("=========", myActive);
  return (
    <div className="container ChooseSetting">
      <h3 className="center">Engagement Ring Settings</h3>
      <MainPage />
      <div className="lab-diamond-btn">
        <div className="ShopByStyle"><Link to="#" onClick={() => setMyActive("ShopByStyle")}>Shop by Shape</Link></div>

        <div className="lab-diamond-more-icon">
       <div> <Link to="#" onClick={() => setMyActive("MoreFilters")}>Shop by Metal</Link></div>
       <div className="arw">
       <Link to="#" className="left-arw">&#128896;</Link>
          <Link to="#" className="right-arw">&#128898;</Link>

       </div>

        </div>
      </div>

      <div>
        {myActive === "ShopByStyle" && <ShopByStyle />}
        {myActive === "MoreFilters" && <MoreFilters />}
      </div>
    </div>
  );
};
