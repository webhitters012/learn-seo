import React from 'react';
import './ContactSection.css';

const QuoteSection = () => {
  return (
    <div className="quote-container">
      {/* Request a Quote Section */}
      <div className="quote-form">
        <h2>Request a Quote</h2>
        <p>Ready to Work Together? Build a project with us!</p>
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>

      {/* Address Section */}
      <div className="address-section">
        <h3 className="red-text">Address</h3>
        <h4 className="try">Learn SEO & Web Designing Chandigarh</h4>
        <p>
          <strong>Address:</strong>
          <br />
          39B, 40B 5th Floor
          <br />
          Royal Business Park
          <br />
          Motia'z Royal City,
          <br />
          Zirakpur, Punjab 140603
        </p>
        <p>
          <strong>Phone:</strong>
          <br />
          +91 76960-86560
        </p>
        <p>
          <strong>Email:</strong>
          <br />
          info@learnseoandwebdesigninchandigarh.in
          <br />
          contact@learnseoandwebdesigninchandigarh.in
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;
