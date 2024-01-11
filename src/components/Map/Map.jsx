import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.935156411819!2d19.81828881198757!3d41.32314640660099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350311b70c971d7%3A0xe0c2e0adbe3d4b83!2sPir%C3%A2mide%20de%20Tirana!5e0!3m2!1spt-BR!2s!4v1704968989301!5m2!1spt-BR!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        width="100%"
        height="500"
        title="Location"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default Map;