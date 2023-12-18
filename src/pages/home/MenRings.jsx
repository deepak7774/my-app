import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

export const MenRings = () => {
  const [menRings, setMenRings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("homeContext");
        if (storedData) {
          setMenRings(JSON.parse(storedData));
        } else {
          const response = await axios.get(
            "http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/homecontent"
          );
          const data = response.data.data;

          setMenRings(data);

          localStorage.setItem("homeContext", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="menRings">
        <div className=" container">
          <div className="flex menRings-main">
            <div className="menRings-text">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    menRings.ring_promotion_banner_desc
                  ),
                }}
              ></div>
              <div>
                <Link
                  className="button"
                  to={menRings.ring_promotion_banner_link_3}
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="menRings-img">
              <img
                src={menRings.ring_promotion_banner_last}
                alt={menRings.ring_promotion_banner_alt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
