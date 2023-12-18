import React, { useState, useEffect } from "react";
import round from "../../images/Round.png";
import { Link } from "react-router-dom";
import axios from "axios";

export const ShopDiamondShape = () => {
  // diamond shape
  const [shapeData, setShapeData] = useState([]);
console.log(shapeData);
  useEffect(() => {
    axios
      .get("https://dev.demo-swapithub.com/diamond/api/v1/diamondshape")
      .then((res) => {
        setShapeData(res.data.data);
        console.log(res.data.data);
      })
      .catch(() => {
        console.log("API error");
      });
  }, []);
  return (
    <>
      <div className="ShopDiamondShape">
        <div className="container">
        <h2>Shop diamonds by shape</h2>
        <div className="flex">
{
  shapeData.map((shapeItem)=>{
    return(
      <>
      <div className="ShopDiamondShape-img-text">
            <Link to="#">
            <img src={shapeItem.icon} alt="" />
            <span>{shapeItem.shape}</span>
            </Link>
          </div> 
      </>
    )
  })
}
                            
         
        </div>
        </div>
      </div>
    </>
  );
};
