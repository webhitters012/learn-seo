import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Separate state for each dropdown
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle dropdown hover
  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  // Function to close dropdown when mouse leaves
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Company Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('company')}
          onMouseLeave={handleMouseLeave}
        >
          Company
          {openDropdown === 'company' && (
            <ul className="dropdown-menu">
              <li onClick={() => navigate('/Founder')}>Our Founder</li>
              <li onClick={() => navigate('/AboutUs')}>About Us</li>
              <li onClick={() => navigate('/Life-@-Web-Hitters')}>Life @Web Hitters</li>
              <li onClick={() => navigate('/Trainers')}>Our Trainers</li>
              <li onClick={() => navigate('/Trainees')}>Our Trainees</li>
            </ul>
          )}
        </li>

        <li>Our Blog</li>

        {/* Courses Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('courses')}
          onMouseLeave={handleMouseLeave}
        >
          Our Courses
          {openDropdown === 'courses' && (
            <ul className="dropdown-menu">
              <li onClick={() => navigate('/SEO')}>SEO</li>
              <li onClick={() => navigate('/DM')}>Digital Marketing</li>
              <li>Web Design</li>
              <li>Graphic Designing</li>
            </ul>
          )}
        </li>

        <li onClick={() => navigate('/Contact')}>Contact Us</li>
        <li>Apply Jobs</li>
      </ul>
    </nav>
  );
};

export default Navbar;
