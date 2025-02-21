import React from 'react';
import Header from '../header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import AboutBanner from './AboutBanner';
import CompanyOverview from './CompanyOverview';
import OurStory from './OurStory';
import VisionMissionTabs from './VisionMission';
import HiringPartners from './Hiring-Partners';
import StatsGrid from './StatsGrid';
import AboutRating from './Aboutrating';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutBanner />
      <CompanyOverview />
      <StatsGrid />
      <AboutRating />
      <OurStory />
      <VisionMissionTabs />
      <HiringPartners />
      <Footer />
    </div>
  );
};

export default AboutUs;
