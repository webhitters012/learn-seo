import React from 'react';
import './Map.css';

const MapSection = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        className="full-width-map"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Web Hitters&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
