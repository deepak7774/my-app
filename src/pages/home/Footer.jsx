import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaPlus, FaMinus } from "react-icons/fa";
import "../Style.css";
import axios from "axios";
export const Footer = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  // icon url
  const [ftrIcon, setFtrIcon] = useState([]);
  console.log(ftrIcon);
  useEffect(() => {
    const storedNavData = localStorage.getItem("ftrIcon");

    if (storedNavData) {
      setFtrIcon(JSON.parse(storedNavData));
    } else {
      // Fetch data from API if not available in local storage
      axios
        .get(
          "http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/siteinfo"
        )
        .then((res) => {
          localStorage.setItem("ftrIcon", JSON.stringify(res.data.data));
          setFtrIcon(res.data.data);
        })
        .catch(() => {
          console.log("API error");
        });
    }
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="ftr-desktop">
              <div className="ftr-contact flex">
                <ul className="ftr-contact-ul">
                  <h4>
                    <Link to="#">Contact</Link>
                  </h4>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">hello@sama.com</Link>
                  </li>
                  <li>
                    <Link to="#">Book an appointment</Link>
                  </li>
                  <li>
                    <Link to="#">Affiliate</Link>
                  </li>
                </ul>
                <ul className="ftr-contact-ul">
                  <h4>
                    <Link to="#">CARE</Link>
                  </h4>
                  <li>
                    <Link to="#">Shipping & Delivery</Link>
                  </li>
                  <li>
                    <Link to="#">Returns & Exchange</Link>
                  </li>
                  <li>
                    <Link to="#">Warranty</Link>
                  </li>
                  <li>
                    <Link to="#">Payment Plans</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ's</Link>
                  </li>
                </ul>
                <ul className="ftr-contact-ul">
                  <h4>
                    <Link to="#">Education</Link>
                  </h4>
                  <li>
                    <Link to="#">Diamond Buying Guide</Link>
                  </li>
                  <li>
                    <Link to="#">Lab-grown Diamonds</Link>
                  </li>
                  <li>
                    <Link to="#">Jewelry Care</Link>
                  </li>
                  <li>
                    <Link to="#">Ring Sizer</Link>
                  </li>
                </ul>
                <ul className="ftr-contact-ul">
                  <h4>
                    <Link to="#">BRAND</Link>
                  </h4>

                  <li>
                    <Link to="#">Our Story</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
                <ul className="ftr-contact-form">
                  <h4>Stay connected</h4>

                  <p>
                    Join our mailing list for the latest products, news, and
                    offers!
                  </p>

                  <form action="#">
                    <div className="email">
                      <input type="email" placeholder="Enter Email Address.." />
                    </div>
                    <div className="submit-btn">
                      <input className="button" type="submit" value="submit" />
                    </div>
                  </form>

                  <div className="ftr-icons flex">
                    <span>
                      <Link to={ftrIcon.youtube} target="_blank">
                        <BsYoutube />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.instagram} target="_blank">
                        <BsInstagram />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.facebook} target="_blank">
                        <FaFacebookF />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.twitter} target="_blank">
                        <BsTwitter />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.linkedin} target="_blank">
                        <BsLinkedin />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.pinterest} target="_blank">
                        <FaPinterestP />
                      </Link>
                    </span>
                  </div>
                </ul>
              </div>
            </div>

            {/* =================mobile start============== */}
            <div className="mobile-footer ftr-contact">
              <div className="mobile-ftr-contact ftr-contact flex">
                <ul className="ftr-contact-ul" onClick={() => toggle(1)}>
                  <h4 className={selected === 1 ? "active" : ""}>
                    <Link to="#">Contact</Link>
                    <span>{selected === 1 ? <FaMinus /> : <FaPlus />}</span>
                  </h4>

                  <ul className={selected === 1 ? "content-show" : "content"}>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">hello@sama.com</Link>
                    </li>
                    <li>
                      <Link to="#">Book an appointment</Link>
                    </li>
                    <li>
                      <Link to="#">Affiliate</Link>
                    </li>
                  </ul>
                </ul>
                <ul className="ftr-contact-ul" onClick={() => toggle(2)}>
                  <h4 className={selected === 2 ? "active" : ""}>
                    <Link to="#">SUPPORT</Link>
                    <span>{selected === 2 ? <FaMinus /> : <FaPlus />}</span>
                  </h4>
                  <ul className={selected === 2 ? "content-show" : "content"}>
                    <li>
                      <Link to="#">Shipping & Delivery</Link>
                    </li>
                    <li>
                      <Link to="#">Returns & Exchange</Link>
                    </li>
                    <li>
                      <Link to="#">Warranty</Link>
                    </li>
                    <li>
                      <Link to="#">Payment Plans</Link>
                    </li>
                    <li>
                      <Link to="#">FAQ's</Link>
                    </li>
                  </ul>
                </ul>
                <ul className="ftr-contact-ul" onClick={() => toggle(3)}>
                  <h4 className={selected === 3 ? "active" : ""}>
                    <Link to="#">Education</Link>
                    <span>{selected === 3 ? <FaMinus /> : <FaPlus />}</span>
                  </h4>
                  <ul className={selected === 3 ? "content-show" : "content"}>
                    <li>
                      <Link to="#">Diamond Buying Guide</Link>
                    </li>
                    <li>
                      <Link to="#">Lab-grown Diamonds</Link>
                    </li>
                    <li>
                      <Link to="#">Jewelry Care</Link>
                    </li>
                    <li>
                      <Link to="#">Ring Sizer</Link>
                    </li>
                  </ul>
                </ul>
                <ul className="ftr-contact-ul" onClick={() => toggle(4)}>
                  <h4 className={selected === 4 ? "active" : ""}>
                    <Link to="#">BRAND</Link>
                    <span>{selected === 4 ? <FaMinus /> : <FaPlus />}</span>
                  </h4>
                  <ul className={selected === 4 ? "content-show" : "content"}>
                    <li>
                      <Link to="#">Our Story</Link>
                    </li>
                    <li>
                      <Link to="#">Blog</Link>
                    </li>
                    <li>
                      <Link to="#">Terms of Use</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                  </ul>
                </ul>
                <ul className="ftr-contact-form">
                  <h4>Stay connected</h4>

                  <p>
                    Join our mailing list for the latest products, news, and
                    offers!
                  </p>

                  <form action="#">
                    <div className="email">
                      <input type="email" placeholder="Enter Email Address.." />
                    </div>
                    <div className="submit-btn">
                      <input className="button" type="submit" />
                    </div>
                  </form>

                  <div className="ftr-icons flex">
                  <span>
                      <Link to={ftrIcon.youtube} target="_blank">
                        <BsYoutube />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.instagram} target="_blank">
                        <BsInstagram />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.facebook} target="_blank">
                        <FaFacebookF />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.twitter} target="_blank">
                        <BsTwitter />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.linkedin} target="_blank">
                        <BsLinkedin />
                      </Link>
                    </span>
                    <span>
                      <Link to={ftrIcon.pinterest} target="_blank">
                        <FaPinterestP />
                      </Link>
                    </span>
                  </div>
                </ul>
              </div>
            </div>
            {/* =================mobile end============== */}
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <p>{ftrIcon.copyright}</p>
      </div>
    </>
  );
};
