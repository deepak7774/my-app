import { Link, NavLink } from "react-router-dom";
import samaLogo from "../../images/samaLogo.png";
import { BsBag, BsFillBellFill } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUpArrow, BiDownArrow, BiPhoneCall } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSearch } from "../../redux/productAction";
import axios from "axios";

export const Header = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(null);

  const ToggleClass = () => {
    setActive(!active);
  };

  const toggle = (id) => {
    setSelected(selected === id ? null : id);
  };

  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.warn("data in header", result);

  // ======
  // navbar
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const storedNavData = localStorage.getItem("navData");

    if (storedNavData) {
      setNavData(JSON.parse(storedNavData));
    } else {
      // Fetch data from API if not available in local storage
      axios
        .get(
          "http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/menu"
        )
        .then((res) => {
          localStorage.setItem("navData", JSON.stringify(res.data.data));
          setNavData(res.data.data);
        })
        .catch(() => {
          console.log("API error");
        });
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="header-contact-us">
              <Link to="#">Contact Us</Link>
            </div>
            <div className="header-logo">
              <Link to="/">
                <img src={samaLogo} alt="samaLogo" />
              </Link>
            </div>

            <div className="header-icons">
              <div className="bell-icon">
                <Link to="#">
                  <BsFillBellFill />
                  <span>01</span>
                </Link>
              </div>
              <div className="search-icon">
                <Link to="#" onClick={ToggleClass}>
                  <AiOutlineSearch />
                </Link>
                <input
                  className={active ? "search-open" : "search-close"}
                  type="text"
                  onChange={(event) =>
                    dispatch(productSearch(event.target.value))
                  }
                  placeholder="Search Product"
                />
              </div>
              <div className="bag-icon">
                <Link to="/cart">
                  <span>{result.length}</span>
                  <BsBag />
                </Link>
              </div>
              <div className="header-heart-icon">
                <Link to="#">
                  <AiOutlineHeart />
                </Link>
              </div>
              <div className="user-icon">
                <Link to="#">
                  <AiOutlineUser />
                </Link>
              </div>
            </div>
          </div>

          <nav className="nav">
            <ul>
              {navData.map((res) => {
                return (
                  <>
                    <li>
                      <NavLink to="/">{res.name}</NavLink>
                      <div className="engagement-ring flex">
                        {res.categories.map((catRes) => {
                          return (
                            <>
                              <ul>
                                <li>
                                  <NavLink to="/">{catRes.name}</NavLink>
                                </li>

                                {catRes.subcategories.map((subRes) => {
                                  return (
                                    <>
                                      <li>
                                        {subRes.image ? (
                                          <i>
                                            <img src={subRes.image} alt="" />
                                          </i>
                                        ) : null}
                                        <NavLink
                                          target="_parent"
                                          to="/ChooseSetting"
                                        >
                                          {subRes.name}
                                        </NavLink>
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                            </>
                          );
                        })}
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
          {/* ===============================================header mobile device start ===================================================== */}

          <div
            className={
              active ? "mobile-nav-main nav-mobile" : "res-nav-main nav-mobile"
            }
          >
            <div
              onClick={ToggleClass}
              className={
                active ? "navabar-icons close-icons" : "navabar-icons2"
              }
            >
              <AiOutlineClose className="icon" />
            </div>
            <div
              onClick={ToggleClass}
              className={
                active ? "navabar-icons2 " : "navabar-icons HamburgerMenu-icons"
              }
            >
              <GiHamburgerMenu className="icon" />
            </div>

            <nav className={active ? "mobile-nav allnav" : "res-nav allnav"}>
              <div
                className={
                  selected
                    ? "contents-show-main allnav-menu"
                    : "contents-main allnav-menu"
                }
              >
                <ul>
                  {navData.map((item) => (
                    <li
                      key={item.id}
                      className="title"
                      onClick={() => toggle(item.id)}
                    >
                      <NavLink to="/">{item.name}</NavLink>
                      <span>
                        {selected === item.id ? <BiUpArrow /> : <BiDownArrow />}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {navData.map((item) => (
                <div
                  key={item.id}
                  className={
                    selected === item.id
                      ? "content-show main-content"
                      : "content main-content"
                  }
                >
                  <ul>
                    <li className="title" onClick={() => toggle(item.id)}>
                      <NavLink to="/">{item.name}</NavLink>
                      <span>
                        {selected === item.id ? <BiUpArrow /> : <BiDownArrow />}
                      </span>
                    </li>
                    {item.categories && (
                      <div className="engagement-ring flex">
                        {item.categories.map((catItem, index) => (
                          <ul>
                            <li key={index}>
                              <NavLink to="#" onClick={ToggleClass}>
                                {catItem.name}
                              </NavLink>
                            </li>
                            {catItem.subcategories.map((subItem, index) => {
                              return (
                                <>
                                  <li key={index}>
                                    {subItem.image ? (
                                      <i>
                                        <img src={subItem.image} alt="" />
                                      </i>
                                    ) : null}
                                    <NavLink
                                      to="/ChooseSetting"
                                      onClick={ToggleClass}
                                    >
                                      {subItem.name}
                                    </NavLink>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        ))}
                      </div>
                    )}
                  </ul>
                </div>
              ))}
            </nav>
            <div className="nav-mobile-logo">
              <Link to="/">
                <img src={samaLogo} alt="samaLogo" />
              </Link>
            </div>
            <div className="nav-mobile-icons">
              <div className="call-icon">
                <Link to="/">
                  <BiPhoneCall />
                </Link>
              </div>

              <div className="bag-icon">
                <Link to="/">
                  <BsBag />
                </Link>
              </div>
            </div>
            <div className="header-search">
              <form action="#">
                <input type="search" placeholder="Search" />
              </form>
              <div className="search-icon">
                <Link to="/">
                  <AiOutlineSearch />
                </Link>
              </div>
            </div>
          </div>
          {/* =============================================== header mobile device start ===================================================== */}
        </div>
      </header>
    </>
  );
};
export default Header;
