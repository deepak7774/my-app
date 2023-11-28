import React from "react";
import shipRings from "../../images/shipRings.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
export const MostLovedSlider = () => {
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
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 3,
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
      img: shipRings,
      name: "shipRings",
    },
    {
      img: shipRings,
      name: "shipRings",
    },
    {
      img: shipRings,
      name: "shipRings",
    },
    {
      img: shipRings,
      name: "shipRings",
    },
    {
      img: shipRings,
      name: "shipRings",
    },
    {
      img: shipRings,
      name: "shipRings",
    },
    {
        img: shipRings,
        name: "shipRings",
      },
      {
        img: shipRings,
        name: "shipRings",
      },
      {
        img: shipRings,
        name: "shipRings",
      },
  ];

  return (
    <section
      className="mobile-ShopDiamondShape-main mobile-Most-Loved-Engagement"
      id="mobile-ShopDiamondShape-main"
    >
      <div className="container">
        <div className="mobile-ShopDiamondShape">
        <h2>Most Loved Engagement Rings</h2>
          <div className="mobile-ShopDiamondShapeSlider">
            <Slider {...settings}>
              {testimonialSlide.map((client, index) => {
                return (
                  <div className="mobile-ShopDiamondShape-card1">
                    <div className="ShopDiamondShape-img-text">
                    <div class="column-width">
              <Link to="#">
                <div className="MostLoved-img">
                  <img src={shipRings} alt="" />
                </div>
                <p>Ready To Ship Rings</p>
              </Link>
            </div>
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
