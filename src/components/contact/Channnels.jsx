import React from "react";
import "./Channnels.css";
import { channels } from "../../utils/data";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Channnels = () => {
  return (
    <div className="channels gb-md-black section-p">
      <div className="container">
        <div className="channels-content">
          <div className="item-list grid text-center">
            {channels.map((channel, i) => (
              <div className="item bg-dark translate-effect" key={i}>
                <span className="item-icon">{channel.icon}</span>
                <div className="item-info-text fw-5 text-white">
                  {channel.info}
                </div>
                <p className="text">{channel.text}</p>
                <Link to="/" className="item-link text-grey">
                  <BsArrowRightCircle size={30} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channnels;
