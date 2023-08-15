import React from "react";
import "./Testimonials.css";
import { testimonials } from "../../utils/data";
import { MdStar } from "react-icons/md";

const gradient = "url(#blue-gradient)";

const Testimonials = () => {
  let startList;
  const showRating = (startCount) => {
    startList = new Array(startCount);
    for (let i = 0; i < startList.length; i++) {
      startList[i] = <MdStar size={25} style={{ fill: gradient }} />;
    }
    return startList;
  };

  return (
    <section className="testimonials section-p bg-black" id="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <div className="section-t text-center">
            <h1>customer testimonials</h1>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, similique. Nemo odit maiores architecto unde.
            </p>
          </div>
          <div className="item-list grid text-white text-center">
            {testimonials.map((testimonial, i) => {
              showRating(testimonial.rating);
              return (
                <div className="item translate-effect bg-dark" key={i}>
                  <div className="item-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h4 className="item-name fs-25">{testimonial.name}</h4>
                  <p className="item-text text">{testimonial.text}</p>
                  <ul className="item-rating flex flex-center">
                    {startList.map((star, i) => (
                      <li key={i}>{star}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
