import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <Navbar />
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h1 className="text-upper header-title fw-9">BB Tirana</h1>
          <p className="text-lead">
             
          </p>
          <a href="/" className="btn header-btn btn-blue">
            <FaAngleDown/>
            <span>Book now</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
