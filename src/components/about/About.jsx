import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/img_2.png.jpg";

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={aboutImage} alt="Onde estamos" />
          </div>
          <div className="content-right text-white">
            <div className="section-t">
              <h3>How to find us</h3>
            </div>
            <p className="text mb-1">
            The apartment has a modern style, just finished from the renovation. It has everything for a comfortable and modern life. The location is perfect in a building which is a cultural monument on the 4th floor, near Skenderbej Square, the national museums, the AirAlbania Stadium, and all the institutions. All the best bars and restaurants of the city are located less than 100 meters from the apartment
            </p>
            <p className="text">
             Why staying here?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
