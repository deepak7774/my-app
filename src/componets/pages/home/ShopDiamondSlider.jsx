import React from "react";
import { FaStar } from "react-icons/fa";
import round from "../../images/Round.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export const ShopDiamondSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      
      
    ],
  };
  const testimonialSlide = [
    {
      img: round,
      name: "Round",
    },
    {
      img: round,
      name: "Round",
    },
    {
      img: round,
      name: "Round",
    },
    {
      img: round,
      name: "Round",
    },
    {
      img: round,
      name: "Round",
    },
    {
      img: round,
      name: "Round",
    },
    {
        img: round,
        name: "Round",
      },
      {
        img: round,
        name: "Round",
      },
      {
        img: round,
        name: "Round",
      },
  ];

  return (
    <section
      className="mobile-ShopDiamondShape-main"
      id="mobile-ShopDiamondShape-main"
    >
      <div className="container">
        <div className="mobile-ShopDiamondShape">
          <h2>Shop diamonds by shape</h2>
          <div className="mobile-ShopDiamondShapeSlider">
            <Slider {...settings}>
              {testimonialSlide.map((client, index) => {
                return (
                  <div className="mobile-ShopDiamondShape-card1">
                    <div className="ShopDiamondShape-img-text">
                      <Link to="#">
                        <img src={round} alt="" />
                        <p>Round</p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
