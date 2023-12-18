import React from "react";
import {BiSolidPhoneCall } from "react-icons/bi"
import {MdEmail} from "react-icons/md"
import {BsChatDotsFill} from "react-icons/bs"
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="contact-main">
      <div className="container">
      <h2>Contact</h2>
        <div className="contact">          
          <div className="contact-call">
            <Link to="#"><BiSolidPhoneCall/></Link>            
            <p>Call</p>
          </div>
          <div className="contact-email">
            <Link to="#"><MdEmail/></Link>            
            <p>Email</p>
          </div>
          <div className="contact-chat">
            <Link to="#"><BsChatDotsFill/></Link>            
            <p>Chat</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};
