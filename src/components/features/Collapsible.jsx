import React, { useState } from "react";
import "./Collapsible.css";
import { BsPlusLg } from "react-icons/bs";

const gradient = "url(#blue-gradient)";

const Collapsible = ({ feature }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="item">
      <div
        className="item-head flex flex-between bg-dark"
        onClick={() => setOpen(!open)}
      >
        <h6 className="fs-20 fw-4 text-grey">{feature.title}</h6>
        <button
          type="button"
          className={`item-icon flex ${open ? "item-icon-rotate" : null}`}
        >
          <BsPlusLg style={{ fill: gradient }} size={32} />
        </button>
      </div>

      <div className={`item-body ${open ? "item-body-show" : null}`}>
        <p className="text">{feature.text}</p>
      </div>
    </div>
  );
};

export default Collapsible;
