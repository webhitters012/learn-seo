import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VissionMission.css';

const VisionMissionTabs = () => {
  const [activeContent, setActiveContent] = useState('vision');

  const content = {
    vision: {
      title: 'Our Vision',
      text: 'Our vision is to revolutionize the digital landscape by delivering innovative solutions that empower businesses to achieve their full potential. We strive to set new industry standards through excellence and creativity.',
      image: './Images/vision.png',
    },
    mission: {
      title: 'Our Mission',
      text: "Our mission is to provide top-notch web and mobile solutions tailored to our clients' needs. We are committed to fostering growth, building strong partnerships, and continuously innovating to create meaningful digital experiences.",
      image: './Images/Mission.png',
    },
  };

  return (
    <div className="container mt-4 text-center">
      <h2 style={{ color: '#de3335' }}>Our Vision & Mission</h2>
      <div className="btn-group mt-3" role="group">
        <button
          className={`btn ${activeContent === 'vision' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setActiveContent('vision')}
          style={{
            borderColor: '#de3335',
            color: activeContent === 'vision' ? '#fff' : '#de3335',
            backgroundColor: activeContent === 'vision' ? '#de3335' : 'transparent',
          }}
        >
          Our Vision
        </button>
        <button
          className={`btn ${activeContent === 'mission' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setActiveContent('mission')}
          style={{
            borderColor: '#de3335',
            color: activeContent === 'mission' ? '#fff' : '#de3335',
            backgroundColor: activeContent === 'mission' ? '#de3335' : 'transparent',
          }}
        >
          Our Mission
        </button>
      </div>
      <div className="row mt-4 align-items-center">
        <div className="col-md-6">
          <div className="card1 shadow p-4" style={{ borderColor: '#de3335' }}>
            <h4 style={{ color: '#de3335' }}>{content[activeContent].title}</h4>
            <p>{content[activeContent].text}</p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={content[activeContent].image}
            alt={content[activeContent].title}
            className="img-fluid1"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMissionTabs;
