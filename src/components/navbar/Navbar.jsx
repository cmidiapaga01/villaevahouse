import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaTwitter, FaSkype, FaVimeoV } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navHandler = () => {
    setNavToggle(!navToggle);
  };

  // const navHandler = () => {
  //   setNavToggle(prevData => !prevData);
  // };

  return (
    <nav className="navbar w-100 flex">
      <div className="container w-100">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between w-100">
            <Link to="/" className="navbar-brand fs-26 text-white">
              BB Tirana
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>
          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav text-white text-cap">
                <li>
                  <Link to="/">about</Link>
                </li>
                <li>
                  <Link to="/">features</Link>
                </li>
                <li>
                  <Link to="/">pricing</Link>
                </li>
                <li>
                  <Link to="/">contact</Link>
                </li>
              </ul>
              <ul className="navbar-social flex text-white">
                <li>
                  <Link
                    to="https://twitter.com/"
                    target="_blank"
                    className="flex flex-center"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.skype.com/es/"
                    target="_blank"
                    className="flex flex-center"
                  >
                    <FaSkype />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://vimeo.com/es/"
                    target="_blank"
                    className="flex flex-center"
                  >
                    <FaVimeoV />
                  </Link>
                </li>
              </ul>
              <div className="navbar-btns">
                <button type="button" className="btn">
                  <IoMdRocket />
                  <span>Check availability</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
