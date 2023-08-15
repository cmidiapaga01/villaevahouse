import React from "react";
import "./Portfolio.css";
import { portfolio } from "../../utils/data";

const Portfolio = () => {
  return (
    <section className="portfolio section-p bg-dark" id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <div className="section-t text-center">
            <h3>our portfolio</h3>
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              deserunt eveniet omnis perferendis sunt corporis.
            </p>
          </div>
          <div className="item-list text-center text-white grid">
            {portfolio.map((portfolio, i) => (
              <div
                className="item flex flex-center flex-column translate-effect"
                key={i}
                style={{
                  backgroundImage: `url(${portfolio.image})`,
                }}
              >
                <div className="item-title fs-25 fw-6">{portfolio.title}</div>
                <div className="text text-white">{portfolio.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
//1:10:39
//1:14:55
