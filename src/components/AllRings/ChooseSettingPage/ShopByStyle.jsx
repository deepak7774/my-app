import React, { useState, useEffect } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { ShopByStyleMobileSlider } from "./ShopByStyleMobileSlider";
import { ProductListFaq } from "../../../pages/home/ProductListFaq";
import { ProductListMoreToExplore } from "../../../pages/home/ProductListMoreToExplore";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner";
// import LoaderSpinner from "../../LoaderSpinner";

const ShopByStyle = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [page, SetPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/products?page=${page}`
        );
        const productData = response.data.data;

        const updatedProducts = await Promise.all(
          productData.map(async (product) => {
            const finalLevel = calculateFinalLevel(product.finishLevel);
            const finalMetalType = calculateFinalMetalType(product.metalType);

            const priceResponse = await axios.get(
              `https://www.overnightmountings.com/priceapi/service.php?action=pricecalculation&type=json&level=${finalLevel}&metaltype=${finalMetalType}&metalcolor=${product.metalColor}&stylenumber=${product.sku}&quality=${product.diamondQuality}`
            );

            return {
              name: product.name,
              image: product.default_image_url,
              slug: product.slug,
              price: priceResponse.data.price,
              CenterShape: product.CenterShape,
              multiCategory: product.multiCategory,
            };
          })
        );

        setFilteredData((prev) => [...prev, ...updatedProducts]);
        setLoading(false);

        // Store filteredData in local storage after updating the state
        localStorage.setItem(
          "filteredData",
          JSON.stringify([...filteredData, ...updatedProducts])
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const calculateFinalLevel = (level) => {
    // Implement your logic for final level conversion here
    // ...

    return "";
  };

  const calculateFinalMetalType = (metalType) => {
    // Implement your logic for metal type conversion here
    // ...

    return "";
  };

  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        SetPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // filter
  const filters = [
    "Classic",
    "natural inspire",
    "three stone",
    "hello",
    "luxe",
    "demo",
    "White gold",
    "red",
    "yellow",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const updatedFilters = selectedFilters.filter(
        (filter) => filter !== selectedCategory
      );
      setSelectedFilters(updatedFilters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = filteredData.filter((item) =>
        selectedFilters.includes(item.multiCategory)
      );
      setFilteredData(tempItems);
    } else {
      setFilteredData(filteredData);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, filteredData]);
  return (
    <>
      <div className="">
        <div className="main-content">
          <div>
            <div className="buttons-container filter-button"></div>
            <div className="buttons-container filter-button">
              {filters.map((category, idx) => (
                <Link
                  to="#"
                  onClick={() => handleFilterButtonClick(category)}
                  className={` ${
                    selectedFilters.includes(category) ? "active" : ""
                  }`}
                  key={`filters-${idx}`}
                >
                  <img
                    src="https://css.brilliantearth.com/static/img/fillter/shop-by-style/Solitaire_ir352.png"
                    alt=""
                  />
                  <p>{category}</p>
                </Link>
              ))}
            </div>
            <ShopByStyleMobileSlider />
          </div>
        </div>

        <div className="best-seller-main">
          <div>
            <p>382 Engagement Ring Settings</p>
          </div>

          <div className="best-seller">
            <Link to="#">Sort:best Seller</Link>
            <div className="best-seller-drop-down">
              <ul>
                <li>
                  <Link to="#">Best Sellers</Link>
                </li>
                <li>
                  <Link to="#">Newest</Link>
                </li>
                <li>
                  <Link to="#">Price (Low to High)</Link>
                </li>
                <li>
                  <Link to="#">Price (High to Low) </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resultdata setings-Page-img">
          {filteredData.map((item) => (
            <>
              {item.image ? (
                <div key={item.slug} className="all-pages-data ">
                  <Link to={`/mainPage2/${item.slug}`}>
                    <div className="all-img1">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="heart-icon">
                      <CiHeart />
                    </div>
                    <div className="all-card-four-color">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{item.color}</p>
                    <p className="multiCategory">{item.multiCategory}</p>
                  </Link>
                </div>
              ) : null}
            </>
          ))}
        </div>

        <div>
          <ProductListMoreToExplore />
        </div>
        <div>
          <ProductListFaq />
        </div>
        <div>{loading && <LoaderSpinner />}</div>
      </div>
    </>
  );
};

export default ShopByStyle;
