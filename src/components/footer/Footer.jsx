import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();

  return (
    <footer className="footer bg-black flex flex-center" id="footer">
      <div className="container flex flex-center w-100">
        <div className="footer-content grid text-center">
          <p className="text">
            BBTirana. All rights reserved.
            <br />
            <span className="text">
              &copy; {date.getFullYear()}
              {" PREENCHER. "}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
