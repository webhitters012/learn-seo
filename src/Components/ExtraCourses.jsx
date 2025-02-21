import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExtraCourses.css';

const ExtraCourses = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <div>
      <div className="SEO-tool for-bg-images mt-5">
        <div className="flex-text">
          <h1 className="h1-of-SEO-tool">
            <b>
              Explore our <span className="adf"> Courses</span>
            </b>
          </h1>
          <p className="p-of-SEO-tool">
            Check out our courses that will help you grow your professional skill set. We provide
            courses in SEO, graphic designing, web designing, and advanced digital marketing. Get
            practical knowledge and guidance from our best
            <span className="adf">SEO training in Zirakpur</span> for growth in your career.
          </p>
        </div>
      </div>

      {/* Course List */}
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          {/** Course 1 */}
          <div className="col-md-4 d-flex align-items-center justify-content-center img1-div-of-price position-relative">
            <img
              className="d-block p-1"
              style={{ width: '100%' }}
              src="Images/Courses/Digital Marketing Courses in Zirakpur.png"
              alt="Digital Marketing Courses in Zirakpur"
            />
            <button className="enrol-button" onClick={openPopup}>
              Enroll Now
            </button>
          </div>

          {/** Course 2 */}
          <div className="col-md-4 d-flex align-items-center justify-content-center img1-div-of-price position-relative">
            <img
              className="d-block p-1"
              style={{ width: '100%' }}
              src="Images/Courses/SEO Training in Zirakpur.png"
              alt="SEO Training in Zirakpur"
            />
            <button className="enrol-button" onClick={openPopup}>
              Enroll Now
            </button>
          </div>

          {/** Course 3 */}
          <div className="col-md-4 d-flex align-items-center justify-content-center img1-div-of-price position-relative">
            <img
              className="d-block p-1"
              style={{ width: '100%' }}
              src="Images/Courses/Graphic Designing and Web Designing.png"
              alt="Graphic Designing and Web Designing"
            />
            <button className="enrol-button" onClick={openPopup}>
              Enroll Now
            </button>
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

export default ExtraCourses;
