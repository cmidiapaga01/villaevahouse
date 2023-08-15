import React from "react";
import "./Features.css";
import Collapsible from "./Collapsible";
import { features } from "../../utils/data";

const Features = () => {
  return (
    <section className="features section-p bg-black" id="features">
      <div className="container">
        <div className="features-content">
          <div className="item-list text-white">
            {features.map((feature, i) => (
              <Collapsible key={i} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
// 1:01:59
