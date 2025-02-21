import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const CourseSection = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  return (
    <div className="container for-bg-images mt-5" id="course">
      <div className="SEO-tool">
        <div className="flex-text">
          <h1 className="h1-of-SEO-tool">
            <b>
              Our<span className="adf"> Job Oriented Courses</span>
            </b>
          </h1>

          <p className="p-of-SEO-tool">
            Our advanced <span className="adf">digital marketing courses in Zirakpur</span> combine
            theory and practical experience to give you the basic and advanced skills you need.
            Suitable for newcomers and entrepreneurs, real-world projects and case studies allow you
            to learn from professionals in the field. Let’s explore our courses.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* SEO */}
          <div className="col-md-3 col-sm-6">
            <div className="service-box">
              <img src="Images/Courses/SEO.png" alt="SEO" />
              <h3>SEO</h3>
              <p>
                Our effective SEO courses include optimization techniques that raise a website's
                search engine ranking and draw in more organic traffic.
              </p>
              <button onClick={() => navigate('/SEO')} className="btn-read-more">
                READ MORE
              </button>
            </div>
          </div>
          {/* Web Designing */}
          <div className="col-md-3 col-sm-6">
            <div className="service-box">
              <img src="Images/Courses/WD.png" alt="Web Designing" />
              <h3>Web Designing</h3>
              <p>
                Our web design course in Zirakpur teaches skills to create visually appealing,
                simple, and responsive websites using the latest techniques.
              </p>
              <button className="btn-read-more">READ MORE</button>
            </div>
          </div>
          {/* Graphic Designing */}
          <div className="col-md-3 col-sm-6">
            <div className="service-box">
              <img src="Images/Courses/Graphic.png" alt="Graphic Designing" />
              <h3>Graphic Designing</h3>
              <p>
                We teach creative skills in our graphic design course so that students can create
                captivating images for a range of digital media.
              </p>
              <button className="btn-read-more">READ MORE</button>
            </div>
          </div>
          {/* Digital Marketing */}
          <div className="col-md-3 col-sm-6">
            <div className="service-box">
              <img src="Images/Courses/DM.png" alt="Digital Marketing" />
              <h3>Digital Marketing</h3>
              <p>
                Our digital marketing course teaches vital strategies and the recent instruments to
                improve your online visibility and promote your company.
              </p>
              <button onClick={() => navigate('/DM')} className="btn-read-more">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 bg-img-of-btn">
        <div className="row pt-3 pt-lg-3 d-flex flex-column">
          <div className="text-white col p-0" style={{ userSelect: 'all' }}>
            <h3 className="text-center m-3" style={{ fontSize: '30px' }}>
              Advanced{' '}
              <span style={{ fontSize: '35px', fontStyle: 'italic' }}>
                Digital Marketing Course
              </span>{' '}
              in Zirakpur
            </h3>
          </div>
          <div className="col p-0">
            <div className="button-secion1 d-flex aligm-content-center justify-content-center flex-column">
              <div className="buttons d-flex aligm-content-center justify-content-center flex-wrap flex-md-nowrap">
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Search Engine Optimization
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Google Search Console
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Social Media Marketing
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Email Marketing
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Google Ads
                </button>
              </div>
              <div className="buttons d-flex aligm-content-center justify-content-center flex-wrap flex-md-nowrap">
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Canva
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Blogging
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  AI Tools
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Facebook Ads
                </button>
              </div>
              <div className="buttons d-flex aligm-content-center justify-content-center flex-wrap flex-md-nowrap">
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Wordpress, Wix, Shopify
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  E-Commerce Marketing
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Content
                  <br />
                  Writing
                </button>
              </div>
              <div className="buttons d-flex aligm-content-center justify-content-center flex-wrap flex-md-nowrap">
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  Google Analytics 4
                </button>
                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>
                  100% Live Projects
                </button>
              </div>
              <div className="d-flex aligm-content-center justify-content-center">
                <button className="p-4 m-5 text-light border-0 bhi openPopup" onClick={openPopup}>
                  Enroll Now
                </button>
                <a href="./SEO and Digital Marketing Training Modules.pdf" download>
                  <button className="p-4 m-5 text-light border-0 bhi">Download Brochure</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popup Form */}
      <div className={`popup ${isPopupOpen ? 'show' : ''}`} onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closePopup}>
            &times;
          </span>

          {/* Form Section */}
          <div className="row">
            <div className="col-md-6 text-center popup-left">
              <form
                className="form-container1"
                method="POST"
                action="https://script.google.com/macros/s/AKfycby5Q3XNTliQzDryPvYqv-04W0jDs_iVPsTPoapc3hQ9oNLH2rfzdc1wYpqDH2VwuUvaag/exec"
              >
                <h3 className="text-align-center">
                  <b>
                    Apply for
                    <br />
                    <span style={{ color: '#de3335', lineHeight: '1.5' }}>
                      The Digital Marketing Course
                    </span>
                  </b>
                </h3>
                <label htmlFor="Name">Name:</label>
                <input type="text" placeholder="Full Name" id="Name" name="Name" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" placeholder="Phone Number" id="phone" name="Phone" required />

                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="Email" id="Email" name="Email" required />

                <label htmlFor="batches">Choose a batch:</label>
                <select id="batches" name="Batch">
                  <option>February 15</option>
                  <option>March 1</option>
                </select>

                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Message" name="Message" rows="4"></textarea>

                <button type="submit" className="btn-read-more">
                  Apply
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <img src="Images/popup img.jpg" height="650px" width="450px" alt="Popup_Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
