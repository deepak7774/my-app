import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";


export const EndsSoon = () => {
  const [endSoon, setEndSoon] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("homeContext");
        if (storedData) {
          setEndSoon(JSON.parse(storedData));
        } else {
          const response = await axios.get(
            "http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/homecontent"
          );
          const data = response.data.data;

          setEndSoon(data);

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
      <div className="endsSoon">
        <div className="container">
          <div className="flex">
            <div className="endsSoon-img">
              <img src={endSoon.sale_banner} alt="endSoon" loading="lazy"/>
            </div>
            <div className="endsSoon-text">
              <h2>{endSoon.sale_banner_heading}</h2>              
              <div
              dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(endSoon.sale_banner_desc),
                      }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
