import React from 'react';
import Header from '../header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ContactBanner from './ContactBanner';
import QuoteSection from './ContactSection';
import MapSection from './Map';

const Contact = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ContactBanner />
      <QuoteSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Contact;
