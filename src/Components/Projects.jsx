import React from 'react';
import './Projects.css'; // Import custom styles
import mapImage from '../assests/map.png'; // Adjust path based on your project structure

const InternationalProjects = () => {
  return (
    <>
      <div className="container for-bg-images mt-5">
        <div className="SEO-tool">
          <div className="flex-text">
            <h1 className="h1-of-SEO-tool">
              <b>
                International <span className="adf">Projects</span>
              </b>
            </h1>

            <p className="p-of-SEO-tool">
              Our
              <span className="adf">
                <b>Advanced SEO coaching in Zirakpur</b>
              </span>{' '}
              provides students with practical and direct experience with USA, Australian, Canadian,
              UK projects, and many more countries. Our curriculum assures that students are fully
              prepared to excel in SEO, graphic designing, web designing, and digital marketing.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5 p-1">
        <img
          className="w-100 h-100 d-block map-img"
          src={mapImage}
          alt="Top Digital Marketing Institute in Dera Bassi"
        />
      </div>
    </>
  );
};

export default InternationalProjects;
