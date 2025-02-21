import React from 'react';
import Header from '../header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import LifeBanner from './LifeBanner';
import Gallery from './ImageGallery';

const Life = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <LifeBanner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Life;
