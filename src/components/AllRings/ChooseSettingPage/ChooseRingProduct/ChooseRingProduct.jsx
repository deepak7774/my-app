import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";

export const ChooseRingProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    default_image_url: "",
    videosRose: "",
    videosWhite: "",
    videosYellow: "",
    price: [],
    images: [],
    metalType: "",
    metalColor: "",
    finishLevel: "",
    diamondQuality: "",
    sku: "",
    description: "",
    // Add more properties as needed
  });
  console.log(productData);
  const { slug: productId } = useParams();
  const [selectedColor, setSelectedColor] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState(0);

  const calculateFinalMetalColor = async (color) => {
    console.log(color);
    try {
      const finalLevel = calculateFinalLevel(productData.finishLevel);
      const finalMetalType = calculateFinalMetalType(productData.metalType);
      const response = await axios.get(
        "http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/products"
      );
      const product = response.data.data.find(
        (product) => product.slug === productId
      );
      const priceResponse = await axios.post(
        `https://www.overnightmountings.com/priceapi/service.php?action=pricecalculation&type=json&level=${finalLevel}&metaltype=${finalMetalType}&metalcolor=${color}&stylenumber=${product.sku}&quality=${product.diamondQuality}`

        // `http://www.overnightmountings.com/priceapi/service.php?action=pricecalculation&type=json&metaltype=14kt&metalcolor=${color}&stylenumber=50274-E-.05&Quality=6&sizevalue=0&fingersizevalue=Stock`
      );
      setSelectedColor(color);
      setUpdatedPrice(priceResponse.data.price);
    } catch (error) {
      console.error("Error updating price:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/products"
        );
        const product = response.data.data.find(
          (product) => product.slug === productId
        );

        if (product) {
          const finalLevel = calculateFinalLevel(product.finishLevel);
          const finalMetalType = calculateFinalMetalType(product.metalType);
          const metalColor = calculateFinalMetalColor(product.metalColor);

          const priceResponse = await axios.get(
            `https://www.overnightmountings.com/priceapi/service.php?action=pricecalculation&type=json&level=${finalLevel}&metaltype=${finalMetalType}&metalColor=${metalColor}&stylenumber=${product.sku}&quality=${product.diamondQuality}`
          );
          setProductData({
            name: product.name,
            default_image_url: product.default_image_url,
            images: product.images,
            videosRose: product.videos.rose,
            videosWhite: product.videos.white,
            videosYellow: product.videos.yellow,
            price: priceResponse.data.price,
            metalType: product.metalType,
            metalColor: product.metalColor,
            finishLevel: product.finishLevel,
            diamondQuality: product.diamondQuality,
            sku: product.sku,
            CenterShape: product.CenterShape,
            description: product.description,
            // Add more properties as needed
          });
          // Store filteredData in local storage after updating the state
        localStorage.setItem("productData", JSON.stringify([...productData]));
        } else {
          console.log(`Product with ID ${productId} not found.`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productId]); 

  const calculateFinalLevel = (level) => {
    if (level.indexOf("Complete") !== -1) {
      return "Complete";
    }
    if (level.indexOf("Polished") !== -1) {
      return "Polished";
    }
    if (level.indexOf("Semi-mount") !== -1) {
      return "Semi-mount";
    }
    return "";
  };

  const calculateFinalMetalType = (metalType) => {
    // Implement your logic for metal type conversion here
    // ...

    return "";
  };

  // diamond shape
  const [shapeData, setShapeData] = useState(null);

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

  // slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 8,
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
  // =====

  // metal color change
  useEffect(() => {
    setProductData((prevProductData) => ({
      ...prevProductData,
      metalColor: selectedColor,
    }));
  }, [selectedColor]);
  // ======
  const [selectedWhiteColor, setSelectedWhiteColor] = useState(true);
  const [selectedYellowColor, setSelectedYellowColor] = useState(false);
  const [selectedRoseColor, setSelectedRoseColor] = useState(false);

  // hover change carate color
  const [changePriceColor, setChangePriceColor] = useState([]);
  function changeBackground(color) {
    setChangePriceColor(color);
  }

  if (!shapeData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="details-page">
      <div className="">
        <div className="singleProduct">
          <div className="singleProduct-img">
            <div className="details-videos">
              {selectedRoseColor && (
                <video src={productData.videosRose} loop autoPlay muted></video>
              )}
              {selectedWhiteColor && (
                <video
                  src={productData.videosWhite}
                  loop
                  autoPlay
                  muted
                ></video>
              )}
              {selectedYellowColor && (
                <video
                  src={productData.videosYellow}
                  loop
                  autoPlay
                  muted
                ></video>
              )}
            </div>
            {/* <div className="default_image">
              <img src={productData.default_image_url} alt="" />
            </div> */}

            <div className="all-images">
              {productData.images.slice(0, 10).map((detailsImg) => {
                return (
                  <>
                    <div className="detail-images">
                      <img src={detailsImg} alt="" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="singleProduct-text">
            <h4>{productData.name}</h4>
            <div className="star-rating">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
            </div>
            <span>
              <p>{productData.description}</p>
            </span>
            <div className="shape-diamond">
              <span>View with diamond Shape : oval</span>
              {productData.CenterShape &&
              productData.CenterShape == ["TAKE PEG HEAD"] ? (
                <div className="shape-main ">
                  <Slider {...settings}>
                    {shapeData.map((item) => {
                      return (
                        <>
                          <div className="shape">
                            <img src={item.icon} alt={item.name} />
                          </div>
                        </>
                      );
                    })}
                  </Slider>
                </div>
              ) : null}
            </div>

            <div className="metal-type">
              <strong>Metal : </strong>
              {`${productData.metalType.slice(0, 4)} ${
                changePriceColor || productData.metalColor
              } ${productData.metalType.slice(-4)}`}
              <div className="metal-type-color">
                <Link
                  to="#"
                  className={selectedWhiteColor ? "selected" : ""}
                  onMouseOver={() => changeBackground("White")}
                  onClick={() => {
                    calculateFinalMetalColor("White");
                    setSelectedWhiteColor(true);
                    setSelectedYellowColor(false);
                    setSelectedRoseColor(false);
                  }}
                  checked={selectedColor === "White"}
                ></Link>
                <Link
                  to="#"
                  className={selectedYellowColor ? "selected" : ""}
                  onMouseOver={() => changeBackground("Yellow")}
                  onClick={() => {
                    calculateFinalMetalColor("Yellow");
                    setSelectedWhiteColor(false);
                    setSelectedYellowColor(true);
                    setSelectedRoseColor(false);
                  }}
                  checked={selectedColor === "Yellow"}
                ></Link>
                <Link
                  to="#"
                  className={selectedRoseColor ? "selected" : ""}
                  onMouseOver={() => changeBackground("Pink")}
                  onClick={() => {
                    calculateFinalMetalColor("Pink");
                    setSelectedWhiteColor(false);
                    setSelectedYellowColor(false);
                    setSelectedRoseColor(true);
                  }}
                  checked={selectedColor === "Pink"}
                ></Link>
              </div>
            </div>
            <div className="prong-type">
              <span>Prong Type: Four Prong</span>
              <div className="prong-type-img">
                <Link to="#" className="img">
                  <img
                    src="https://image.brilliantearth.com/media/cache/07/3c/073cb20c313b8b4f654d1461a7eee080.jpg"
                    alt="#"
                  />
                </Link>
                <Link to="" className="img">
                  <img
                    src="https://image.brilliantearth.com/media/cache/07/3c/073cb20c313b8b4f654d1461a7eee080.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <div className="Setting-Carat-main">
              <span>Setting Carat Weight: 1/3 ct. tw.</span>
              <div className="Setting-Carat">
                <Link to="#">1/2</Link>
                <Link to="#">1/3</Link>
                <Link to="#">1/4</Link>
              </div>
            </div>

            <div className="Diamond-Original-main">
              <span>Diamond Original: Nature</span>
              <div className="Diamond-Original">
                <Link to="#">Nature</Link>
                <Link to="#">Lab Grown</Link>
              </div>
            </div>
            <p>${updatedPrice} (Setting Only)</p>
            <Link to={`/mainPage3/${productData.id}`} className="ChooseSetting">
              <button>Choose a settings</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
