import Header from './header';
import Navbar from './Navbar.jsx';
import HeroSection2 from './Hero-Section2.jsx';
import TestimonialSlider from './Testimonials';
import Video from './Video';
import CourseSection from './Courses';
import ExtraCourses from './ExtraCourses';
import Certification from './Certification';
import WhatWeProvide from './Provide';
import SeoToolsSlider from './Tools';
import InternationalProjects from './Projects.jsx';
import CompanyReviewSlider from './Rating&Review.jsx';
import ContactForm from './ContactForm';
import FAQSection from './FAQ.jsx';
import AboutZirakpur from './Zirakpur';
import Footer from './Footer';
import HeroCounterSection from './HeroCounterSection.jsx';

const Home = () => {
  return (
    <div>
      {/*Header*/}
      <Header />
      {/*Navbar*/}
      <Navbar />
      <HeroCounterSection />
      {/*Hero*/}
      <HeroSection2 />
      {/*CourseSection*/}
      <CourseSection />
      {/*Extra Courses*/}
      <ExtraCourses />
      {/*WhatWeProvide*/}
      <WhatWeProvide />
      {/*InternationalProjects*/}
      <InternationalProjects />
      {/*Video Section*/}
      <Video />
      {/*Tools*/}
      <SeoToolsSlider />
      {/*Certification*/}
      <Certification />
      {/*Rating and Reviews Section*/}
      <CompanyReviewSlider />
      {/*Testimonial Section*/}
      <TestimonialSlider />
      {/*ContactForm*/}
      <ContactForm />
      {/*FAQSection*/}
      <FAQSection />
      {/*AboutZirakpur*/}
      <AboutZirakpur />
      {/*Footer*/}
      <Footer />
    </div>
  );
};
export default Home;
