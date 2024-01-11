import React from "react";
import "./Qualities.css";
import { qualities } from "../../utils/data";
import qualityImage from "../../assets/images/professionals_main_img.jpg";

const Qualities = () => {
  return (
    <section className="qualities section-p bg-md-black" id="qualities">
      <div className="container">
        <div className="qualities-content grid">
          <div className="content-left">
            <div className="text-center section-t">
              <h3 className="text-cap">Luxury Apartment</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                quia, eveniet voluptatem corporis id ipsa!
              </p>
            </div>
            <div className="item-list text-white">
              {qualities.map((quality, i) => (
                <div className="item flex" key={i}>
                  <div className="item-icon flex flex-center">
                    {quality.icon}
                  </div>
                  <div className="item-text">
                    <h3 className="item-title fs-25">{quality.title}</h3>
                    <p className="text">{quality.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="content-right">
            <img src={qualityImage} alt="Quality" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
