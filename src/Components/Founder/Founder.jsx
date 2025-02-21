import React from 'react';
import Header from '../header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ProfileSection from './Profile';
import FounderSection from './FounderSection';

const Founder = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <FounderSection />
      <ProfileSection />
      <Footer />
    </div>
  );
};
export default Founder;
