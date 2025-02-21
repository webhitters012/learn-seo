import React from 'react';
import Header from '../header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import TrainersBanner from './TrainersBanner';
import TeamProfiles from './TeamProfiles';

const Trainers = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <TrainersBanner />
      <TeamProfiles />
      <Footer />
    </div>
  );
};

export default Trainers;
