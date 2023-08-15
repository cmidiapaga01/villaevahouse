import React from "react";
import "./Services.css";
import { services } from "../../utils/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services section-p bg-md-black" id="services">
      <div className="container">
        <div className="services-content">
          <svg width="0" height="10px">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#55b3d5" />
              <stop offset="100%" stopColor="#5764de" />
            </linearGradient>
          </svg>
          <div className="item-list grid text-white text-center">
            {services.map((service, i) => (
              <ServiceCard service={service} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
//44:08
