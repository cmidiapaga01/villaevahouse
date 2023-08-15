import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15916.806623379667!2d-38.0824234!3d-4.1807237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b88f1a87f3460f%3A0x2a28c8d550d6126c!2sVilla%20Eva%20House%20Beberibe!5e0!3m2!1spt-BR!2suk!4v1692044614881!5m2!1spt-BR!2suk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        width="100%"
        height="500"
        title="Location"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default Map;
