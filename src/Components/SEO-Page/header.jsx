import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="navbar-logo">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <img src="/Images/Tools/logo.png" alt="Logo" className="logo" />
          </div>

          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <span className="contact-info">
              <span className="glyphicon glyphicon-earphone"></span>
              <a href="tel:9646204610">+91 96462-04610</a>&nbsp;&nbsp;
              <span className="glyphicon glyphicon-earphone"></span>
              <a href="tel:7696086560">+91 76960-86560</a>
            </span>
          </div>

          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <div className="social-icons">
              <a
                href="https://www.instagram.com/learnseo_webdesign/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="Images/Social Media/instagram.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/LearnSeoAndWebdesign/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="Images/Social Media/facebook.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/web-hitters/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="Images/Social Media/linkedin.png"
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
              <a href="https://x.com/learnseochd" target="_blank" rel="noreferrer">
                <img src="Images/Social Media/twitter.png" alt="Twitter" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
