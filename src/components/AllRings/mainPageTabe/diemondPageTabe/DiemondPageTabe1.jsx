import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChooseRingProduct } from "../../ChooseSettingPage/ChooseRingProduct/ChooseRingProduct";
import { ChooseDiamonds } from "../../ChooseDiamondPage/ChooseDiamonds";

export const DiemondPageTabe1 = () => {
  const [activeSingle, setActiveSingle] = useState("ChooseDiamonds");

  return (
    <div>
      <div className="main-btn-setting">
        <button>
          <Link to="" onClick={() => setActiveSingle("ChooseDiamonds")}>
            1- Choose Diamond
            <div>
              <img
                src="https://css.brilliantearth.com/static/img/svg/diamond.svg"
                alt=""
              />
            </div>
          </Link>
        </button>

        <button onClick={() => setActiveSingle("ChooseRingProduct")}>
          <Link to="/">
            <div>
              2- choose Setting
              <div>
                <Link to="" className="change">
                  Browse Setting
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://css.brilliantearth.com/static/img/svg/setting.svg"
                alt=""
              />
            </div>
          </Link>
        </button>

        <button>
         
          <div>
            3 - Complete Ring
            <p className=" browse-setting"> Select Ring Size </p>
           </div>
           <div>
            <img
              src="https://css.brilliantearth.com/static/img/svg/ring.svg"
              alt=""
            />
          </div>
        </button>
      </div>
      <div className="">
        {activeSingle === "ChooseDiamonds" && <ChooseDiamonds />}

        {/* {activeSingle === "ChooseRingProduct" && <ChooseRingProduct />} */}
      </div>
    </div>
  );
};
