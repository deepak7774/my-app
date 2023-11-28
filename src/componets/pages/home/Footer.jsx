import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";


export const Footer = () => {
  const [selected, setSelected] = useState(null);

const toggle = (i) => {
  if (selected === i) {
    setSelected(null);
  } else {
    setSelected(i);
  }
};
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="ftr-desktop">
          <div className="ftr-contact flex">
            <ul className="ftr-contact-ul">
              <h4><Link to="#">Contact</Link></h4>
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
            <h4><Link to="#">SUPPORT</Link></h4>              
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
            <h4><Link to="#">Education</Link></h4>
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
            <h4><Link to="#">ABOUT</Link></h4>

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
                Join our mailing list for the latest products, news, and offers!
              </p>

              <form action="#">
                <div className="email">
                  <input type="email" placeholder="Enter Email Address.." />
                </div>
                <div className="submit-btn">
                  <input className="button" type="submit" value="submit"/>
                </div>
              </form>

              <div className="ftr-icons flex">
                <span>
                  <Link to="#"><BsYoutube /></Link>
                </span>
                <span>
                  <Link to="#"><BsInstagram /></Link>                  
                </span>
                <span>
                  <Link to="#"><FaFacebookF /></Link>
                </span>
                <span>
                 <Link to="#"> <BsTwitter /></Link>
                </span>
                <span>
                  <Link to="#"><BsLinkedin /></Link>
                </span>
                <span>
                  <Link to="#"><FaPinterestP /></Link>
                </span>
                <span>
                  <Link to="#"><BsTwitter /></Link>
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
                <span>{selected === 1 ? <BiUpArrow /> : <BiDownArrow />}</span>
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
              <span>{selected === 2 ? <BiUpArrow /> : <BiDownArrow />}</span>

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
            <ul  className="ftr-contact-ul" onClick={() => toggle(3)}>
              <h4 className={selected === 3 ? "active" : ""}>
                <Link to="#">Education</Link>
              <span>{selected === 3 ? <BiUpArrow /> : <BiDownArrow />}</span>

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
            <ul className="ftr-contact-ul"  onClick={() => toggle(4)}>
              <h4 className={selected === 4 ? "active" : ""}>
                <Link to="#">ABOUT</Link>
              <span>{selected === 4 ? <BiUpArrow /> : <BiDownArrow />}</span>

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
                Join our mailing list for the latest products, news, and offers!
              </p>

              <form action="#">
                <div className="email">
                  <input type="email" placeholder="Enter Email Address.." />
                </div>
                <div className="submit-btn">
                  <input className="button" type="submit" value="submit"/>
                </div>
              </form>

              <div className="ftr-icons flex">
                <span>
                  <Link to="#">
                    <BsYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <BsInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                </span>
                <span>
                  <Link to="#">                    
                    <BsTwitter />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <BsLinkedin />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaPinterestP />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <BsTwitter />
                  </Link>
                </span>
              </div>
            </ul>
          </div>
          </div>
          {/* =================mobile end============== */}
        </div>
      </footer>
      <div className="copy-right">
        <p>©2023 Sama.All Rights Reserved.</p>
      </div>
    </>
  );
};
