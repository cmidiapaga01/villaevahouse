import React from "react";
import "./ServiceCard.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="item bg-dark translate-effect">
      <span className="item-icon">{service.icon}</span>
      <h4 className="item-title fs-25">{service.title}</h4>
      <p className="fs-19 text">{service.text}</p>
      <Link to="/" className="item-link text-grey">
        <BsArrowRightCircle size={30} />
      </Link>
    </div>
  );
};

export default ServiceCard;
//49:10
