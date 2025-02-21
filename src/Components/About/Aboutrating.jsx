import React from 'react';
import './Aboutrating.css';

const reviews = [
  {
    href: 'https://www.facebook.com/LearnSeoAndWebdesign/',
    src: './Images/Rating/facebook review.jpg',
    alt: 'Facebook Review',
  },
  {
    href: 'https://maps.app.goo.gl/V9B1qD33mwuBZJnY7',
    src: './Images/Rating/Google-Rating new.jpg',
    alt: 'Google Rating',
  },
  {
    href: 'https://www.justdial.com/jdmart/Chandigarh/Learn-SEO-Web-Designing-Opposite-Defence-Enclave-Lohgarh/0172PX172-X172-180127133509-K7X2_BZDET/catalogue?nid=#reviews',
    src: './Images/Rating/Jusdial-Rating new.jpg',
    alt: 'Justdial Rating',
  },
];

export default function AboutRating() {
  return (
    <div>
      <h2 className="ity">Rating & Reviews</h2>
      <div className="review-container">
        {reviews.map((review, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={review.href}
            className="review-link"
          >
            <img className="review-image" src={review.src} alt={review.alt} />
          </a>
        ))}
      </div>
    </div>
  );
}
