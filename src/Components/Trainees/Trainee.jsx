import React from 'react';
import Header from '../header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import TraineeBanner from './TraineeBanner';
import TeamSection from './TeamSection';
import TraineeSection from './RecentTrainees';

const Trainee = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <TraineeBanner />
      <TeamSection />
      <TraineeSection />
      <Footer />
    </div>
  );
};

export default Trainee;
