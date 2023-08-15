import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <Navbar />
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h1 className="text-upper header-title fw-9">Villa Eva</h1>
          <p className="text-lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            odio ratione ipsum consequatur recusandae, obcaecati minus?
            Doloremque, perferendis.
          </p>
          <a href="/" className="btn header-btn btn-blue">
            <FaPaperPlane/>
            <span>get started</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
