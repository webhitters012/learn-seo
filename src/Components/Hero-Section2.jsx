import React from 'react';
import './HeroSection2.css'; // Ensure you have a corresponding CSS file for styling

const HeroSection2 = () => {
  return (
    <div className="main-herosection2">
      <div className="herosection2">
        {/* Left Side - Text Content */}
        <div className="herosection-div-of-text">
          <p className="first-p-of-herosection2">
            <span className="adf">Are you looking for</span>
          </p>
          <h2 className="h2-of-herosection2">Best Digital Marketing Courses in Zirakpur</h2>
          <br />
          <p className="main-p-of-herosection">
            Learn SEO & Web Design is the most reputable brand for
            <span className="adf">
              {' '}
              <b> Digital Marketing Courses in Zirakpur,</b>{' '}
            </span>
            with a staff of knowledgeable instructors and 17 years of experience. We provide 100%
            job placement assistance, excellent training, and internship programs. Our strong ties
            to the industry ensure plenty of employment prospects, offering the resources and advice
            needed for success.
            <br />
            <br />
            Moreover, our
            <span className="adf">
              {' '}
              <b> SEO courses in Zirakpur </b>{' '}
            </span>
            are created for beginners and experts who are looking to pursue a career in the field,
            as well as entrepreneurs looking to increase online sales. We encourage every student to
            succeed and develop their skills in this digital world. So, get yourself transformed
            with our expert trainers. Because it is not just about the rankings; it also includes a
            majority of other areas.
            <br />
            <br />
            You will receive our professional instructions on the most effective SEO techniques
            based on recent Google trends. For all well-known browsers, we focus on technical
            strategies.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="herosection2-img">
          <img
            src="./Images/New_home/Best Digital Marketing Training in Zirakpur.webp"
            alt="Best Digital Marketing Training in Zirakpur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
