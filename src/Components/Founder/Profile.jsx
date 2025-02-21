import React from 'react';
import './Profile.css'; // Import CSS

const ProfileSection = () => {
  return (
    <div className="profile-container">
      {/* Left Section: Image & Info */}
      <div className="profile-image-container">
        <img
          src="/Images/trainers/234444.jpg" // Replace with actual image
          alt="Sandeep Bhandari"
          className="profile-image"
        />
        <div className="profile-info">
          <h2>Sandeep Bhandari</h2>
          <p>Digital Marketing Expert</p>
          <p>Since 2008</p>
        </div>
      </div>

      {/* Right Section: Description */}
      <div className="profile-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <h2>
          <strong>Sandeep Bhandari</strong>{' '}
          <span className="highlighted-text">
            (Founder Of Learn SEO & Web Designing Chandigarh)
          </span>
        </h2>
      </div>
    </div>
  );
};

export default ProfileSection;
