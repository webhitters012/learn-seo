import React from 'react';
import './Rating&Review.css'; // Ensure styles are properly imported

const CompanyReviewSlider = () => {
  return (
    <div className="company-review-container">
      <div className="main-section-of-company-review">
        <div className="img-of-company-review">
          <h3>Rating & Review</h3>
          <div className="review-of-company">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/LearnSeoAndWebdesign/"
            >
              <img
                className="review-images"
                src="./Images/Rating/facebook review.jpg"
                alt="Facebook Review"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/V9B1qD33mwuBZJnY7"
            >
              <img
                className="review-images"
                src="./Images/Rating/Google-Rating new.jpg"
                alt="Google Rating"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.justdial.com/jdmart/Chandigarh/Learn-SEO-Web-Designing-Opposite-Defence-Enclave-Lohgarh/0172PX172-X172-180127133509-K7X2_BZDET/catalogue?nid=#reviews"
            >
              <img
                className="review-images"
                src="./Images/Rating/Jusdial-Rating new.jpg"
                alt="Justdial Rating"
              />
            </a>
          </div>

          <h3>Associated With</h3>
          <div className="slider">
            <div className="image-slider-wrapper1">
              <div className="image-slider">
                {[
                  './Images/Hiring-Partners/Adore-me-boutique.png',
                  './Images/Hiring-Partners/AKS-Developers.png',
                  './Images/Hiring-Partners/Architects-Group.png',
                  './Images/Hiring-Partners/Art.png',
                  './Images/Hiring-Partners/Arvind-Herbal-Labs.png',
                  './Images/Hiring-Partners/Barphani.png',
                  './Images/Hiring-Partners/BEST-IELTS-COACHING-INSTITUTE-IN-CHANDIGARH.png',
                  './Images/Hiring-Partners/Book-My-Air-Travel.png',
                  'Crex.jpg',
                  'AKS Developers.jpg',
                  'An Architects Group.jpg',
                  'Arvind Herbal Labs.jpg',
                  'Blinkit.jpg',
                  'Book My Air Travel.jpg',
                  'Browse Wheels.jpg',
                  'DLF.jpg',
                  'Gold Zone Estates.jpg',
                  'HDFC.jpg',
                  'HGroup.jpg',
                  'Holy Blood.jpg',
                  'Nivesh Consultant.jpg',
                  'Paytm.jpg',
                  'Proptye.jpg',
                  'RealFinc.jpg',
                  'Roofs & Heights.jpg',
                  'Sushma.jpg',
                  'Swiggy.jpg',
                  'Zomato.jpg',
                ].map((image, index) => (
                  <img
                    key={index}
                    className="tool-slider newslider"
                    src={`./${image}`}
                    alt={image.replace(/.png|.jpg/g, '')}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="recruitment-partner">
            <h3>Recruitment Partner</h3>
            <img
              className="tool-slider newslider"
              src="./Images/Hiring-Partners/Move ONN.png"
              alt="Move Onn"
            />
          </div>
        </div>
        <div className="img-of-review-section-main">
          <img
            className="img-of-pic"
            src="./Images/SEO-Training-Academy.jpg"
            alt="Best Digital Marketing Institute in Dera Bassi"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyReviewSlider;
