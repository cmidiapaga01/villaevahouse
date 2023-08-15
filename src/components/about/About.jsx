import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/about_main_img.jpg";

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={aboutImage} alt="About Solnhub" />
          </div>
          <div className="content-right text-white">
            <div className="section-t">
              <h3>About Us</h3>
            </div>
            <p className="text mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ad expedita rem illo repudiandae vel quis illum nesciunt quod
              reprehenderit, assumenda tempora aspernatur voluptate est deleniti
              nisi accusantium. Recusandae sunt eius natus praesentium quod
              culpa enim dolorum modi et, hic voluptas reprehenderit inventore
              velit. Deserunt id consectetur laboriosam accusamus tenetur?
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              et qui minima, tempore aliquid placeat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
